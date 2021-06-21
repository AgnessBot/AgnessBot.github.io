import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const NotFound = () => {
    return (
        <div className={'flex justify-evenly items-center flex-col mt-28'}>
            <Helmet>
                <title>404 | page not found</title>
            </Helmet>
            <div>
                <div className={'animate-xd'}>
                    <strong className={'text-9xl text-white'}>404</strong>
                </div>
            </div>
            <div className={'flex justify-center items-center flex-col mt-10'}>
                <strong className={'text-white text-3xl'}>
                    OOPS! PAGE NOT FOUND
                </strong>
                <strong
                    className={
                        'mt-2 text-gray-color_text text-xl text-center max-w-2xl'
                    }
                >
                    Page not found, you can go to the home page by clicking the
                    button below and if you think it is an error, you can go to
                    our discord server to report it.
                </strong>
            </div>
            <div
                className={
                    'bg-transparent border-4 border-white px-10 py-2 mt-5 text-white rounded-md'
                }
            >
                <button className={'flex items-center space-x-5 text-lg'}>
                    <strong>Back to home</strong>
                    <FaHome />
                </button>
            </div>
        </div>
    );
};

export default NotFound;
