import React from 'react';
import {Link} from 'react-router-dom';

export const ProfileSummary = () => {

    return(
        <div className="profile-suggestions-container">
            <Link to="/app/profile">
            <img src="https://picsum.photos/50" className="user-img" alt="profile"/>
            </Link>
            <div className="profile-details">
                <Link to="/app/profile">
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