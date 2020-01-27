import React from 'react';
import help from '../../img/help.svg';
import { Layout } from './Layout';

export const HelpPage = () => {

  return(
    <Layout>
      <img src={help} alt="ajuda" className="static-page-img"/>
      <h2>Ajuda</h2>
      <p>
        To get support, reach to <a href="https://twitter.com/bpaulino0" style={{fontWeight: 'bold'}}>Bruno Paulino</a> on Twitter.
      </p>
    </Layout>
  );

};