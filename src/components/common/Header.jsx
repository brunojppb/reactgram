import React, {useContext, useState} from 'react';
import logo from '../../img/logo.svg';
import {Link} from 'react-router-dom';

import Routes from '../../Routes';
import { AuthContext } from '../auth/AuthWrapper';

export const Header = () => {

  const {user} = useContext(AuthContext);
  const [search, setSearch] = useState('');

  return(
    <header>
      <div className="header-container">
        <div className="logo-container">
            <Link to={Routes.TIMELINE}><img src={logo} alt="reactgram logo"/></Link>
            <Link to={Routes.TIMELINE}><span>Reactgram</span></Link>
        </div>
          
        <div className="menu-container">
          <ul>
            <li>
              <Link to={Routes.ADD_POST}><span className="icon-plus-circled"/></Link>
            </li>
            <li>
              <Link to={Routes.USER_SEARCH}><span className="icon-search"/></Link>
            </li>
            <li>
              <Link to={Routes.getUserProfile(user.id)}><span className="icon-user"/></Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};