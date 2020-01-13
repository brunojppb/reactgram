import React from 'react';
import { Footer } from '../common/Footer';

export const Layout = ({children}) => {

  return(
    <React.Fragment>
      <div className="home-wrapper" style={{margin: 'auto', padding: 16, maxWidth: 935, gridGap: 16}}>
        <h1>Reactgram</h1>
        {children}
        <Footer/>
      </div>
    </React.Fragment>
  );

};