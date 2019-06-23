import React from 'react';

import {UserProfileStats} from './UserProfileStats';
import {UserPosts} from './UserPosts';

export const UserProfilePage = () => {
    return(
        <div className="profile-page">
            <UserProfileStats/>
            <UserPosts/>
        </div>
    );

};

