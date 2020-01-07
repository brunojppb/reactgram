import React, {useState, createContext, useEffect} from 'react';
import Cookies from 'universal-cookie';
import { getProfile, deleteLogout, AUTH_COOKIE_NAME, registerInterceptorForStatusCode } from '../../network/backend';
import { useHistory } from 'react-router';
import Routes from '../../Routes';
import { Loader } from '../common/Loader';

export const AuthContext = createContext(null);
export const AuthWrapper = ({children}) => {

  const [{user, isLoading}, setState] = useState({user: null, isLoading: true});
  const history = useHistory();
  
  const onLogout = () => {
    deleteLogout().then(response => {
      new Cookies().remove(AUTH_COOKIE_NAME, {path: '/'});
      setState(state => ({...state, user: null}));
      history.replace(Routes.LOGIN);
    }, error => {
      console.error("Could not logout", error.response.data);
    })
  }

  const onLogin = (user, token) => {
    const now = new Date();
    const oneYearFromNow = new Date(now.setFullYear(now.getFullYear() + 1))
    new Cookies().set(AUTH_COOKIE_NAME, token, {path: '/', expires: oneYearFromNow});
    setState(state => ({...state, user}));
    history.replace(Routes.TIMELINE);
  }

  useEffect(() => {
    // interceptor here after get profile success
    // So we can redirect user to login after 401 (Unauthorized)
    let deregisterUnauthorizedInterceptor = () => {};
    // Fetch user profile
    // in case of success, register interceptor for unauthorized requests
    getProfile().then(response => {
      const {user} = response.data;
      setState(state => ({...state, user, isLoading: false}));
      deregisterUnauthorizedInterceptor = registerInterceptorForStatusCode(onLogout, 401);
    }, error => {
      setState(state => ({...state, user: null, isLoading: false}));
    });
    return deregisterUnauthorizedInterceptor;
  }, []);

  return isLoading
    ? <Loader/>
    : (
      <AuthContext.Provider value={{user, onLogout, onLogin}}>
        {children}
      </AuthContext.Provider>
    )
  

}