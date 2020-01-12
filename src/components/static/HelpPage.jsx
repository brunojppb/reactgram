import React from 'react';
import help from '../../img/help.svg';
import { Layout } from './Layout';

export const HelpPage = () => {

  return(
    <Layout>
      <img src={help} alt="ajuda" className="static-page-img"/>
      <h2>Ajuda</h2>
      <p>
        Para obter suporte, envie um email para <a href="mailto:help@reactgram.dev" style={{fontWeight: 'bold'}}>help@rectgram.dev</a>
      </p>
    </Layout>
  );

};