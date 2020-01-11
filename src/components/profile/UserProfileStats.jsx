import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {SettingsMenuOverlay} from './SettingsMenuOverlay';
import Routes from '../../Routes';
import { getUserProfile } from '../../network/backend';
import { GlobalNotificationContext } from '../common/NotificationSheet';
import { UserProfileImage } from './UserProfileImage';

// TODO: Follow/Unfollow button
const OtherProfileActions = ({isFollowing}) => {
  const btnClass = isFollowing ? 'btn-default' : 'btn-primary';
  const text = isFollowing ? 'deixar de seguir' : 'seguir';
  return <button className={`btn ${btnClass}`}>{text}</button>;
}

const MyProfileActions = () => {

  const [showingSettings, setShowingSettings] = useState(false);
  const toggleSettings = (e) => {
    e && e.preventDefault();
    setShowingSettings(!showingSettings);
  }
  const settingsMenu = showingSettings ? <SettingsMenuOverlay onClose={toggleSettings}/> : null;

  return(
    <React.Fragment>
      <Link to={Routes.SETTINGS} className="btn btn-default">Editar Perfil</Link>
      {/* TODO: Use button instead of A tag */}
      <button className="link"><span className="icon-settings" onClick={toggleSettings}></span></button>
      {settingsMenu}
    </React.Fragment>
  );
};

export const UserProfileStats = ({userId, isMyProfile = false }) => {

  const {showNotification} = useContext(GlobalNotificationContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
      getUserProfile(userId).then(response => {
        const {user: userProfile} = response.data;
        setProfile(userProfile);
      }, error => {
        const {error: errorMessage} = error.response.data;
        showNotification(errorMessage);
      });
  }, [userId]);
  
  return profile
  ? (
      <div className="profile-stats-container">
        <UserProfileImage src={profile.pictureUrl} className="user-img-big" />
        <div className="profile-container">
          <div className="profile-settings">
            <span>{`${profile.firstName} ${profile.lastName}`}</span>
            {isMyProfile ? <MyProfileActions/> : <OtherProfileActions userId={userId} isFollowing={profile.isFollowing || false}/> }
          </div>
          <div className="profile-stats">
            <span><strong>{profile.entryCount}</strong> posts</span>
            <span><Link to={Routes.FOLLOWERS}><strong>{profile.followerCount}</strong> seguidores</Link></span>
            <span><Link to={Routes.FOLLOWING}><strong>{profile.followingCount}</strong> seguindo</Link></span>
          </div>
        </div>
      </div>
    )
  : null;
};