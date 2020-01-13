import React from 'react';
import {Switch, Route} from 'react-router-dom';

import { Header } from './Header';
import {TimelinePage} from '../timeline/TimelinePage';
import {UserProfilePage} from '../profile/UserProfilePage';
import {Footer} from '../common/Footer';
import { ProfileSettingsPage } from '../profile/ProfileSettingsPage';
import {AddPostPage} from '../post/AddPostPage';
import { PostPage } from '../post/PostPage';
import {NotFound} from '../common/NotFound';
import Routes from '../../Routes';
import { UserSearchPage } from '../profile/UserSearchPage';

export const MainContainer = () => {

    return(
        <>  
            <Header/>
            <main className="main">
                <Switch>
                    <Route path={Routes.TIMELINE} exact component={TimelinePage}/>
                    <Route path={Routes.ADD_POST} exact component={AddPostPage}/>
                    <Route path={Routes.POST} exact component={PostPage}/>
                    <Route path={Routes.SETTINGS} component={ProfileSettingsPage}/>
                    <Route path={Routes.USER_PROFILE} component={UserProfilePage}/>
                    <Route path={Routes.USER_SEARCH} component={UserSearchPage}/>
                    <Route component={NotFound} />
                </Switch>
            </main>
            <div className="footer-wrapper">
                <Footer/>
            </div>
        </>
    );

};