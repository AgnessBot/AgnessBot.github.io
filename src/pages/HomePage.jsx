import React from 'react';

import Header from '../components/HeroSection/index';
import CardsComponent from '../components/Cards';
import TeamSection from '../components/TeamSection';
const HomePage = () => {
    return (
        <>
            <Header />
            <h1
                className={
                    'text-center text-white text-4xl font-black mt-12 flex justify-center'
                }
            >
                Why Agness?
            </h1>
            <CardsComponent />
            <div
                className={
                    'flex justify-evenly items-center w-full h-48 bg-gray-900 my-20'
                }
            >
                <div
                    className={
                        'flex justify-center items-center flex-col text-white space-y-2'
                    }
                >
                    <h1 className="font-bold text-2xl text-green-500">Users</h1>
                    <p className="font-bold text-5xl">59,496,459</p>
                </div>
                <div
                    className={
                        'flex justify-center items-center flex-col text-white space-y-2'
                    }
                >
                    <h1 className="font-bold text-2xl text-green-500">
                        Servers
                    </h1>
                    <p className="font-bold text-5xl">1,200,304</p>
                </div>
                <div
                    className={
                        'flex justify-center items-center flex-col text-white space-y-2'
                    }
                >
                    <h1 className="font-bold text-2xl text-green-500">
                        Channels
                    </h1>
                    <p className="font-bold text-5xl">230,205,070</p>
                </div>
            </div>
            <TeamSection />
        </>
    );
};

export default HomePage;
