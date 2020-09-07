import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Routes from '../../Routes'
import { useAuth } from './AuthWrapper'

export const ProtectedRoute = ({ children, ...props }) => {
  const { user } = useAuth()

  return (
    <Route
      {...props}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: Routes.LOGIN,
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}
