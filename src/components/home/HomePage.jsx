import React from 'react';
import {Footer} from '../common/Footer';
import {SignupForm} from './SignupForm';
import phones from '../../img/mobile_phones.png';

export const HomePage = () => {

  return(
    <div className="home-wrapper">
      <div className="home">
        <div className="mobile-app">
          <img src={phones} class="mobile-app-screen" alt="mobile phone"/>
        </div>
        <div className="signup-container">
          <h1 className="title center">Reactgram</h1>
          <h2 className="subtitle center">Crie sua sua conta e compartilhe suas fotos com amigos e família</h2>
          <a href="/" className="btn btn-primary btn-block">Login</a>
          <h2 className="subtitle center grid-divider">OU</h2>
          <SignupForm/>
        </div>
      </div>
      <Footer/>
    </div>
  );

};