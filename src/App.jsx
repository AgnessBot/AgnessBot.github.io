import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar/index';
import CommandsPage from './pages/CommandsPage';

const App = () => {
    useEffect(() => {
        ScrollReveal().reveal('.ScrollReveal', {
            reset: true,
            delay: 200,
            mobile: false,
        });
    }, []);
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/commands" exact component={CommandsPage} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    );
};

export default App;
