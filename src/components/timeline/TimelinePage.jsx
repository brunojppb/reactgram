import React from 'react';
import {Post} from '../post/Post';
import {ProfileSummary} from './ProfileSummary';

export const TimelinePage = () => {

    return(
        <div className="timeline">
            <Post/>
            <ProfileSummary/>
        </div>
    );

};