import React, { useContext } from 'react'
import { useAuth } from './AuthWrapper'
import { Route, Redirect } from 'react-router-dom'
import Routes from '../../Routes'

export const RegistrationRoute = ({ children, ...props }) => {
  const { user } = useAuth()

  return (
    <Route
      {...props}
      render={({ location }) =>
        user ? (
          <Redirect
            to={{
              pathname: Routes.TIMELINE,
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  )
}
