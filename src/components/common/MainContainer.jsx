import React from 'react';
import {Switch, Route} from 'react-router-dom';

import { Header } from './Header';
import {TimelinePage} from '../timeline/TimelinePage';
import {UserProfilePage} from '../profile/UserProfilePage';
import {Footer} from '../common/Footer';
import { ProfileSettingsPage } from '../profile/ProfileSettingsPage';
import {AddPostPage} from '../post/AddPostPage';

export const MainContainer = () => {

    return(
        <>  
            <Header/>
            <main className="main">
                <Switch>
                    <Route path="/app/timeline" exact component={TimelinePage}/>
                    <Route path="/app/profile" exact component={UserProfilePage}/>
                    <Route path="/app/profile/settings" component={ProfileSettingsPage}/>
                    <Route path="/app/post/add" exact component={AddPostPage}/>
                </Switch>
            </main>
            <div className="footer-wrapper">
                <Footer/>
            </div>
        </>
    );

};