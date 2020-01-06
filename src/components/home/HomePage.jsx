import React from 'react';
import {Footer} from '../common/Footer';
import phones from '../../img/mobile_phones.png';

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