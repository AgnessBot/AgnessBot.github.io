import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import React, { Suspense, lazy, useEffect } from 'react';
import AOS from 'aos';

import Navbar from './components/Navbar/index';
import { CgSpinnerAlt } from 'react-icons/cg';
const HomePage = lazy(() => import('./pages/HomePage'));
const CommandsPage = lazy(() => import('./pages/CommandsPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
    useEffect(() => {
        AOS.init({ delay: 200, offset: 20 });
    }, []);

    return (
        <Router>
            <Navbar />
            <Suspense
                fallback={
                    <div className="flex justify-center items-center animate-spin">
                        <CgSpinnerAlt size="60" color="white" />
                    </div>
                }
            >
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/commands" exact component={CommandsPage} />
                    <Route path="/404" exact component={NotFound} />
                    <Redirect to="/404" />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default App;
