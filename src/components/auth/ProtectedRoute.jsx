import React, { useContext } from 'react';
import {Route, Redirect} from 'react-router-dom';
import Routes from '../../Routes';
import { AuthContext } from './AuthWrapper';

export const ProtectedRoute = ({children, ...props}) => {

  //TODO: Replace with use from Context
  const {user} = useContext(AuthContext);

  return(
    <Route 
      {...props}
      render={({location}) =>(
        user
        ? children
        : <Redirect to={{
            pathname: Routes.LOGIN, 
            state: {from: location}
          }}/>
      )}
    />
  )

};