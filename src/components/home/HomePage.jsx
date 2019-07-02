import React from 'react';
import {Link} from 'react-router-dom';

import {Footer} from '../common/Footer';
import {SignupForm} from './SignupForm';
import phones from '../../img/mobile_phones.png';
import Routes from '../../Routes';

export const HomePage = () => {

  return(
    <div className="home-wrapper">
      <div className="home">
        <div className="mobile-app">
          <img src={phones} className="mobile-app-screen" alt="mobile phone"/>
        </div>
        <div className="signup-container">
          <h1 className="title center">Reactgram</h1>
          <h2 className="subtitle center">Crie sua sua conta e compartilhe suas fotos com amigos e família</h2>
          <Link to={Routes.TIMELINE} className="btn btn-primary btn-block">Login</Link>
          <h2 className="subtitle center grid-divider">OU</h2>
          <SignupForm/>
        </div>
      </div>
      <Footer/>
    </div>
  );

};