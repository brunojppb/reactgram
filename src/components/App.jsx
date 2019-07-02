import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {HomePage} from './home/HomePage';
import {MainContainer} from './common/MainContainer';
import Routes from '../Routes';

export const App = () => {

  return (
    <Router>
      <Route path={Routes.LOGIN} exact component={HomePage} />
      <Route path={Routes.TIMELINE} component={MainContainer} />
    </Router>
  );

};  