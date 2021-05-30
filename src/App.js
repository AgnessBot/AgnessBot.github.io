import './css/main.css';
import React from 'react';
import CardsComponent from './components/Cards';
import Header from './components/Header/index';
import Navbar from './components/Navbar/index';
const App = () => {
    return (
        <div
            className={
                'h-32 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'
            }
        >
            <Navbar />
            <Header />
            <CardsComponent />
        </div>
    );
};
export default App;
