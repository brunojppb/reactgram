import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {TimelinePage} from '../timeline/TimelinePage';
import { Header } from './Header';

export const MainContainer = () => {

    return(
        <>  
            <Header/>
            <main class="main">
                <Router>
                    <Route path="/app/timeline" component={TimelinePage}/>
                </Router>
            </main>
        </>
    );

};