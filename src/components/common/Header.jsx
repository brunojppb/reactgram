import React, {useState} from 'react';
import logo from '../../img/logo.svg';
import {Link} from 'react-router-dom';

import {NotificationsOverlay} from '../notifications/NotificationsOverlay';

export const Header = () => {

    const [isNotifShown, setIsNotifShown] = useState(false);
    const toggleNotifications = (e) => {
        e.preventDefault();
        setIsNotifShown(!isNotifShown);
    };

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
                        <li style={{position: 'relative'}}>
                            <a href="/"><span className="icon-heart" onClick={toggleNotifications}/></a>
                            { isNotifShown && <NotificationsOverlay onClose={toggleNotifications}/> }
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