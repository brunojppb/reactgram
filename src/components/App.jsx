import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {MainContainer} from './common/MainContainer';
import Routes from '../Routes';
import { NotFound } from './common/NotFound';
import { SignupPage } from './home/SignupPage';
import { LoginPage } from './home/LoginPage';
import { NotificationWrapper } from './common/NotificationSheet';
import { AuthWrapper } from './auth/AuthWrapper';
import { ProtectedRoute } from './auth/ProtectedRoute';
import { RegistrationRoute } from './auth/RegistrationRoute';

export const App = () => {

  return (
    <Router>
      <AuthWrapper>
        <NotificationWrapper>  
          <Switch>
            <RegistrationRoute path={Routes.INDEX} exact>
                <SignupPage/>
            </RegistrationRoute>
            <RegistrationRoute path={Routes.LOGIN} exact>
              <LoginPage/>
            </RegistrationRoute>
            <Route path={Routes.TIMELINE}>
              <ProtectedRoute>
                <MainContainer/>
              </ProtectedRoute>
            </Route>
            <Route>
              <NotFound/>
            </Route>
          </Switch>
        </NotificationWrapper>
      </AuthWrapper>
      </Router>
  )

} 