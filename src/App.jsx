import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

import Navbar from './components/Navbar/index';

const HomePage = lazy(() => import('./pages/HomePage'));
const CommandsPage = lazy(() => import('./pages/CommandsPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
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
