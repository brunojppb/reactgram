import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {SettingsMenuOverlay} from './SettingsMenuOverlay';
import Routes from '../../Routes';
import { getUserProfile, deleteUnfollowUser, postFollowUser } from '../../network/backend';
import { GlobalNotificationContext } from '../common/NotificationSheet';
import { UserProfileImage } from './UserProfileImage';

export const OtherProfileActions = ({userId, isFollowing, onFollowingChange}) => {
  
  const [isLoading, setIsLoading] = useState(false);
  const {showNotification} = useContext(GlobalNotificationContext);

  const btnClass = isFollowing ? 'btn-default' : 'btn-primary';
  const text = isFollowing ? 'deixar de seguir' : 'seguir';
  
  const toggleFollowing = () => {
    const action = isFollowing ? deleteUnfollowUser : postFollowUser;
    setIsLoading(true);
    action(userId).then(response => {
      setIsLoading(false);
      onFollowingChange(!isFollowing);
    }, error => {
      showNotification('Erro na requisição. Tente novamente.');
      setIsLoading(false);
    });
  }

  return (
    <button className={`btn ${btnClass}`} 
            onClick={toggleFollowing} 
            disabled={isLoading}>
      {text}
    </button>
  );
}

const MyProfileActions = () => {

  const [showingSettings, setShowingSettings] = useState(false);
  const toggleSettings = () => {
    setShowingSettings(!showingSettings);
  }
  const settingsMenu = showingSettings ? <SettingsMenuOverlay onClose={toggleSettings}/> : null;

  return(
    <React.Fragment>
      <Link to={Routes.SETTINGS} className="btn btn-default">Editar Perfil</Link>
      <button className="link"><span className="icon-settings" onClick={toggleSettings}></span></button>
      {settingsMenu}
    </React.Fragment>
  );
};

export const UserProfileStats = ({userId, isMyProfile = false }) => {

  const {showNotification} = useContext(GlobalNotificationContext);
  const [profile, setProfile] = useState(null);

  const onToggleFollowing = (isFollowing) => {
    setProfile(profile => ({...profile, isFollowing: isFollowing}));
  };

  useEffect(() => {
      getUserProfile(userId).then(response => {
        const {user: userProfile} = response.data;
        setProfile(userProfile);
      }, error => {
        const {error: errorMessage} = error.response.data;
        showNotification(errorMessage);
      });
  }, [userId, showNotification]);
  
  return profile
  ? (
      <div className="profile-stats-container">
        <UserProfileImage src={profile.pictureUrl} className="user-img-big" />
        <div className="profile-container">
          <div className="profile-settings">
            <span>{`${profile.firstName} ${profile.lastName}`}</span>
            {isMyProfile 
              ? <MyProfileActions/> 
              : <OtherProfileActions userId={userId} 
                                     onFollowingChange={onToggleFollowing}
                                     isFollowing={profile.isFollowing || false}/> }
          </div>
          <div className="profile-stats">
            <div>
              <strong>{profile.entryCount}</strong> post{profile.entryCount === 1 ? '' : 's'}
            </div>
            <div>
              <Link to={Routes.getUserFollowers(userId)}>
                <strong>{profile.followerCount}</strong> seguidor{profile.followerCount === 1 ? 'r' : 'es'}
              </Link>
            </div>
            <div>
              <Link to={Routes.getUserFollowing(userId)}>
                <strong>{profile.followingCount}</strong> seguindo
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  : null;
};