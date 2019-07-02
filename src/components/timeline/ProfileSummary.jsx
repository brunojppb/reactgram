import React from 'react';
import {Link} from 'react-router-dom';
import Routes from '../../Routes';

export const ProfileSummary = () => {

    return(
        <div className="profile-suggestions-container">
            <Link to={Routes.PROFILE}>
            <img src="https://picsum.photos/50" className="user-img" alt="profile"/>
            </Link>
            <div className="profile-details">
                <Link to={Routes.PROFILE}>
                    <span className="username">Bruno Paulino</span>
                </Link>
                <div className="profile-stats">
                    <span>100 posts</span>
                    <span>100 seguidores</span>
                    <span>100 seguindo</span>
                </div>
            </div>
        </div>
    );

};