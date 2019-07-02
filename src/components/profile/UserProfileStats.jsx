import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {SettingsMenuOverlay} from './SettingsMenuOverlay';
import Routes from '../../Routes';

// TODO: Follow/Unfollow button
const OtherProfileActions = ({isFollowing}) => {
    const btnClass = isFollowing ? 'btn-default' : 'btn-primary';
    const text = isFollowing ? 'deixar de seguir' : 'seguir';
    return <button className={`btn ${btnClass}`}>{text}</button>;
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
            <Link to={Routes.SETTINGS} className="btn btn-default">Editar Perfil</Link>
            {/* TODO: Use button instead of A tag */}
            <button className="link"><span className="icon-settings" onClick={toggleSettings}></span></button>
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
                    <span><Link to={Routes.FOLLOWERS}><strong>780</strong> seguidores</Link></span>
                    <span><Link to={Routes.FOLLOWING}><strong>35</strong> seguindo</Link></span>
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