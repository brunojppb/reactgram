import React from 'react';
import {HomePage} from './home/HomePage';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export const App = () => {

  return (
    <Router>
      <Route path="/" component={HomePage} />
    </Router>
  );

};  