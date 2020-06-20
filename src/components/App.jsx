import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {MainContainer} from './common/MainContainer';
import Routes from '../Routes';
import {NotFound} from './common/NotFound';
import {SignupPage} from './home/SignupPage';
import {LoginPage} from './home/LoginPage';
import {NotificationWrapper} from './common/NotificationSheet';
import {AuthWrapper} from './auth/AuthWrapper';
import {ProtectedRoute} from './auth/ProtectedRoute';
import {RegistrationRoute} from './auth/RegistrationRoute';
import {AboutPage} from './static/AboutPage';
import {PrivacyPage} from './static/PrivacyPage';
import {HelpPage} from './static/HelpPage';

export const App = () => {

  return (
    <NotificationWrapper>
      <AuthWrapper>
        <Router>
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
            <Route path={Routes.ABOUT}>
              <AboutPage/>
            </Route>
            <Route path={Routes.PRIVACY}>
              <PrivacyPage/>
            </Route>
            <Route path={Routes.HELP}>
              <HelpPage/>
            </Route>
            <Route>
              <NotFound/>
            </Route>
          </Switch>
        </Router>
      </AuthWrapper>
    </NotificationWrapper>
  )

} 