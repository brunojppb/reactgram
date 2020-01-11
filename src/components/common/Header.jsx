import React, {useState, useContext} from 'react';
import logo from '../../img/logo.svg';
import {Link} from 'react-router-dom';

import {NotificationsOverlay} from '../notifications/NotificationsOverlay';
import Routes from '../../Routes';
import { AuthContext } from '../auth/AuthWrapper';

export const Header = () => {

    const {user} = useContext(AuthContext);
    const [isNotifShown, setIsNotifShown] = useState(false);
    const toggleNotifications = (e) => {
        e.preventDefault();
        setIsNotifShown(!isNotifShown);
    };

    return(
        <header>
            <div className="header-container">
                <div className="logo-container">
                    <Link to={Routes.TIMELINE}><img src={logo} alt="reactgram logo"/></Link>
                    <Link to={Routes.TIMELINE}><span>Reactgram</span></Link>
                </div>
                <div className="search-container">
                    <input className="form-control" placeholder="busca"/>
                </div>
                <div className="menu-container">
                    <ul>
                        <li>
                            <Link to={Routes.ADD_POST}><span className="icon-photo"/></Link>
                        </li>
                        <li style={{position: 'relative'}}>
                            <a href="/"><span className="icon-heart" onClick={toggleNotifications}/></a>
                            { isNotifShown && <NotificationsOverlay onClose={toggleNotifications}/> }
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