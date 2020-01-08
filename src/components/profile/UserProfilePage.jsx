import React, { useContext } from 'react';
import {Switch, Route, useParams} from 'react-router-dom';

import {UserProfileStats} from './UserProfileStats';
import {UserPosts} from './UserPosts';
import Routes from '../../Routes';
import { FollowersPage, FollowingPage } from '../followers/UserListPage';
import { AuthContext } from '../auth/AuthWrapper';

export const UserProfilePage = () => {

  const {id} = useParams();
  const {user} = useContext(AuthContext);
  const userProfileId = id || user.id;
  const isMyProfile = userProfileId === user.id;

  return(
    <div className="profile-page">
      <UserProfileStats userId={userProfileId} isMyProfile={isMyProfile}/>
      <UserPosts userId={userProfileId}/>
      {/* Render Followers/Following List */}
      <Switch>
        <Route path={Routes.FOLLOWERS} component={FollowersPage}/>
        <Route path={Routes.FOLLOWING} component={FollowingPage}/>
      </Switch>
    </div>
  );

};

