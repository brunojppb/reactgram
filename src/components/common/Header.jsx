import React from 'react';
import logo from '../../img/logo.svg';
import {Link} from 'react-router-dom';

export const Header = () => {
    return(
        <header>
            <div className="header-container">
                <div className="logo-container">
                    <Link to="/app/timeline"><img src={logo} alt="reactgram logo"/></Link>
                    <span>Reactgram</span>
                </div>
                <div className="search-container">
                    <input className="form-control" placeholder="busca"/>
                </div>
                <div className="menu-container">
                    <ul>
                        <li>
                            <a href="/"><span className="icon-world"/></a>
                        </li>
                        <li>
                            <a href="/"><span className="icon-heart"/></a>
                        </li>
                        <li>
                            <Link to="/app/profile"><span className="icon-user"/></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};