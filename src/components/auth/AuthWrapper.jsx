import React, { useState, createContext, useEffect, useCallback } from 'react'
import Cookies from 'universal-cookie'
import {
  getProfile,
  deleteLogout,
  AUTH_COOKIE_NAME,
  registerInterceptorForStatusCode,
} from '../../network/backend'
import { Loader } from '../common/Loader'

export const AuthContext = createContext(null)
export const AuthWrapper = ({ children }) => {
  const [{ user, isLoading }, setState] = useState({
    user: null,
    isLoading: true,
  })

  const cleanUpAfterLogout = useCallback(() => {
    new Cookies().remove(AUTH_COOKIE_NAME, { path: '/' })
    setState((state) => ({ ...state, user: null }))
  }, [])

  const fetchProfile = useCallback(() => {
    return getProfile()
      .then((response) => {
        const { user } = response.data
        setState((state) => ({ ...state, user, isLoading: false }))
      })
      .catch((error) => {
        console.log('could not get user profile', error.response)
        setState((state) => ({ ...state, user: null, isLoading: false }))
      })
  }, [])

  const onLogout = () => {
    deleteLogout()
      .then(cleanUpAfterLogout)
      .catch((error) => {
        console.error('Could not logout', error.response.data)
      })
  }

  const onLogin = (token) => {
    const now = new Date()
    const oneYearFromNow = new Date(now.setFullYear(now.getFullYear() + 1))
    new Cookies().set(AUTH_COOKIE_NAME, token, {
      path: '/',
      expires: oneYearFromNow,
    })
    fetchProfile()
  }

  const updateUser = (user) => {
    setState((state) => ({ ...state, user }))
  }

  useEffect(() => {
    // interceptor here after get profile success
    // So we can redirect user to login after 401 (Unauthorized)
    let deregisterInterceptor = () => {}
    fetchProfile().then(() => {
      // make sure to always register the interceptor
      deregisterInterceptor = registerInterceptorForStatusCode(
        cleanUpAfterLogout,
        401
      )
    })
    return deregisterInterceptor
  }, [fetchProfile, cleanUpAfterLogout])

  return isLoading ? (
    <Loader />
  ) : (
    <AuthContext.Provider value={{ user, onLogout, onLogin, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}
