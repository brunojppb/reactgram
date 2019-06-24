import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {SettingsMenuOverlay} from './SettingsMenuOverlay';

const OtherProfileActions = ({isFollowing}) => {
    const btnClass = isFollowing ? 'btn-default' : 'btn-primary';
    const text = isFollowing ? 'deixar de seguir' : 'seguir';
    return <a href="/" className={`btn ${btnClass}`}>{text}</a>;
}

const MyProfileActions = () => {

    const [showingSettings, setShowingSettings] = useState(false);
    const toggleSettings = (e) => {
        if (e) {
            e.preventDefault();
        }
        setShowingSettings(!showingSettings);
    }
    const settingsMenu = showingSettings ? <SettingsMenuOverlay onClose={toggleSettings}/> : null;

    return(
        <>
            <Link to="/app/profile/settings" className="btn btn-default">Editar Perfil</Link>
            <a href="/"><span className="icon-settings" onClick={toggleSettings}></span></a>
            {settingsMenu}
        </>
    );
};

export const UserProfileStats = ({notMyProfile = false}) => {

    return(
        <div className="profile-stats-container">
            <img src="https://picsum.photos/150" className="user-img-big" alt="profile"/>
            <div className="profile-container">
                <div className="profile-settings">
                    <span>Bruno Paulino</span>
                    {notMyProfile ? <OtherProfileActions isFollowing={true}/> : <MyProfileActions/>}
                </div>
                <div className="profile-stats">
                    <span><strong>105</strong> posts</span>
                    <span><strong>780</strong> seguidores</span>
                    <span><strong>35</strong> seguindo</span>
                </div>
                <div className="profile-description">
                    <p>
                        👨🏻‍💻 Software Engineer<br/>
                        🌎 Global Citizen 
                    </p>
                </div>
            </div>
        </div>
    );
};