import React from 'react';
import logo from '../../img/logo.svg';

export const Header = () => {
    return(
        <header>
            <div className="logo-container">
                <img src={logo} alt="reactgram logo"/>
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
                        <a href="/"><span className="icon-user"/></a>
                    </li>
                </ul>
            </div>
        </header>
    );
};