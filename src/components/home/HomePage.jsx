import React from 'react'
import { Footer } from '../common/Footer'
import phones from '../../img/mobile-phones.png'
import { Link } from 'react-router-dom'
import Routes from '../../Routes'

export const HomePage = ({ children }) => {
  return (
    <div className="home-wrapper">
      <div className="home">
        <div className="mobile-app">
          <img src={phones} className="mobile-app-screen" alt="mobile phone" />
        </div>
        <div className="home-form-container">
          <h1 className="title center">
            <Link to={Routes.INDEX}>Reactgram</Link>
          </h1>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}
