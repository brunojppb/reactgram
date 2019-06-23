import React from 'react';

export const ProfileSummary = () => {

    return(
        <div className="profile-suggestions-container">
            <img src="https://picsum.photos/50" className="user-img" alt="profile"/>
            <div className="profile-details">
                <span className="username">Bruno Paulino</span>
                <div className="profile-stats">
                    <span>100 posts</span>
                    <span>100 seguidores</span>
                    <span>100 seguindo</span>
                </div>
            </div>
        </div>
    );

};