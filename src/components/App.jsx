import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {HomePage} from './home/HomePage';
import {MainContainer} from './common/MainContainer';

export const App = () => {

  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/app" component={MainContainer} />
    </Router>
  );

};  