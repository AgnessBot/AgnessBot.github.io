import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy, useEffect } from 'react';
import AOS from 'aos';

import Navbar from './components/Navbar/index';

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
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/commands" exact component={CommandsPage} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Suspense>
            {/* <Footer /> */}
        </Router>
    );
};

export default App;
