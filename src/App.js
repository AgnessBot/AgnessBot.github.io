import './css/main.css';
import React from 'react';
import CardsComponent from './components/Cards';
import Header from './components/Header/index';
import Navbar from './components/Navbar/index';
const App = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <CardsComponent />
        </div>
    );
};
export default App;
