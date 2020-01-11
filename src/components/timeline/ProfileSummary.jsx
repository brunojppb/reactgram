import React, { useContext } from 'react';
import {Link} from 'react-router-dom';

import Routes from '../../Routes';
import {AuthContext} from '../auth/AuthWrapper';
import {UserProfileImage} from '../profile/UserProfileImage';


export const ProfileSummary = () => {

  const {user} = useContext(AuthContext);

  return(
    <div className="profile-suggestions-container">
      <Link to={Routes.getUserProfile(user.id)}>
        <UserProfileImage src={user.pictureUrl} className="user-img"/>
      </Link>
      <div className="profile-details">
        <Link to={Routes.getUserProfile(user.id)}>
          <span className="username">{`${user.firstName} ${user.lastName}`}</span>
        </Link>
        <div className="profile-stats">
          <span>{user.entryCount} posts</span>
          <span>{user.followerCount} seguidores</span>
          <span>{user.followingCount} seguindo</span>
        </div>
      </div>
    </div>
  );

};