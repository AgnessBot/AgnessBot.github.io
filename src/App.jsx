import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom';
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar/index';
import CommandsPage from './pages/Commands';

const App = () => {
    useEffect(() => {
        ScrollReveal().reveal('.ScrollReveal', {
            reset: true,
            delay: 250,
            mobile: false,
        });
    }, []);

    return (
        <HashRouter className={'scrollbar-thin scrollbar-thumb-gray-color-dark-200 scrollbar-track-gray-bg-scrollbar overflow-y-scroll'}>
            <Navbar />
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/commands' exact component={CommandsPage} />
                <Route path='*' component={NotFound} />
            </Switch>
        </HashRouter>
    );
};

export default App;
