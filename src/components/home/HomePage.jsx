import React from 'react';
import {Link} from 'react-router-dom';

import {Footer} from '../common/Footer';
import {SignupForm} from './SignupPage';
import phones from '../../img/mobile_phones.png';
import Routes from '../../Routes';

export const HomePage = ({children}) => {

  return(
    <div className="home-wrapper">
      <div className="home">
        <div className="mobile-app">
          <img src={phones} className="mobile-app-screen" alt="mobile phone"/>
        </div>
        <div className="home-form-container">
          <h1 className="title center">Reactgram</h1>
          {children}
        </div>
      </div>
      <Footer/>
    </div>
  );

};