import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {UserProfileStats} from './UserProfileStats';
import {UserPosts} from './UserPosts';
import Routes from '../../Routes';
import { FollowersPage, FollowingPage } from '../followers/UserListPage';

export const UserProfilePage = () => {
    return(
        <div className="profile-page">
            <UserProfileStats />
            <UserPosts/>
            {/* Render Followers/Following List */}
            <Switch>
                <Route path={Routes.FOLLOWERS} component={FollowersPage}/>
                <Route path={Routes.FOLLOWING} component={FollowingPage}/>
            </Switch>
        </div>
    );

};

