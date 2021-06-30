import PropTypes from 'prop-types';
import React from 'react';

export const HeaderLogo = ({ image, imageAlt, text }) => {
    return (
        <>
            <div
                className={
                    'ScrollReveal my-5 border-8 border-green-light rounded-full shadow-2xl hidden md:block'
                }
            >
                <img
                    className={'rounded-full'}
                    src={image}
                    alt={imageAlt}
                    width="250"
                    height="250"
                />
            </div>
        </>
    );
};

HeaderLogo.propTypes = {
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export const HeaderButton = ({ text, toLink, color, children }) => {
    const colors = {
        white: {
            BACKGROUND_COLOR: 'bg-gray-100',
            TEXT_COLOR: 'text-black',
            HOVER: 'hover:bg-white',
        },
        black: {
            BACKGROUND_COLOR: 'bg-gray-800',
            TEXT_COLOR: 'text-white',
            HOVER: 'hover:bg-gray-900',
        },
    };
    const chosenColor = colors[color];
    return (
        <div
            className={`px-5 py-3 ${chosenColor.BACKGROUND_COLOR} duration-300 rounded-lg hover:shadow-2xl my-2 ${chosenColor.TEXT_COLOR} ${chosenColor.HOVER} transform hover:scale-110`}
        >
            <a
                className={'font-bold text-center text-sm'}
                href={toLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                {text}
            </a>
            {children}
        </div>
    );
};

HeaderButton.propTypes = {
    text: PropTypes.string.isRequired,
    toLink: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};
