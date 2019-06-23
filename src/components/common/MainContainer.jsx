import React from 'react';
import {Switch, Route} from 'react-router-dom';

import { Header } from './Header';
import {TimelinePage} from '../timeline/TimelinePage';
import {UserProfilePage} from '../profile/UserProfilePage';

export const MainContainer = () => {

    return(
        <>  
            <Header/>
            <main class="main">
                <Switch>
                    <Route path="/app/timeline" exact component={TimelinePage}/>
                    <Route path="/app/profile" exact component={UserProfilePage}/>
                </Switch>
            </main>
        </>
    );

};