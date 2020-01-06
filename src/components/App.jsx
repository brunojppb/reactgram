import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {MainContainer} from './common/MainContainer';
import Routes from '../Routes';
import { NotFound } from './common/NotFound';
import { SignupPage } from './home/SignupPage';
import { LoginPage } from './home/LoginPage';
import { NotificationWrapper } from './common/NotificationSheet';

export const App = () => {

  return (
      <NotificationWrapper>
        <Router>
          <Switch>
            <Route path={Routes.INDEX} exact component={SignupPage} />
            <Route path={Routes.LOGIN} exact component={LoginPage}/>
            <Route path={Routes.TIMELINE} component={MainContainer} />
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </NotificationWrapper>
  )

} 