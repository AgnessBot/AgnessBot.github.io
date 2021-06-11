import PropTypes from 'prop-types';
import React from 'react';

export const HeaderLogo = ({ image, imageAlt, text }) => {
    return (
        <div>
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
            {/* <p className={'ScrollReveal text-center text-white md:text-4xl text-5xl font-black mb-5'}>
                {text}
            </p> */}
        </div>
    );
};

HeaderLogo.propTypes = {
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export const HeaderButton = ({ text, toLink, color }) => {
    const colors = {
        white: {
            bg_color: 'bg-white',
            text_color: 'text-black',
        },
        black: {
            bg_color: 'bg-gray-dark',
            text_color: 'text-white',
        },
    };
    const chosenColor = colors[color];
    return (
        <div
            className={`ScrollReveal px-8 py-2 ${chosenColor.bg_color} rounded-2xl mx-4 hover:shadow-2xl my-2`}
        >
            <a
                className={`font-semibold ${chosenColor.text_color} text-center`}
                href={toLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                {text}
            </a>
        </div>
    );
};

HeaderButton.propTypes = {
    text: PropTypes.string.isRequired,
    toLink: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};
