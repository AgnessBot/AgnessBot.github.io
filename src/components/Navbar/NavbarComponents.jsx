import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import React from 'react';

export const NavbarLogo = ({ image, imageAlt, toLink, text }) => {
    return (
        <div className={'flex items-center my-2'}>
            <img
                className={'rounded-full'}
                src={image}
                alt={imageAlt}
                width="40"
                height="40"
            />
            <Link
                className={
                    'text-xl font-semibold text-white px-3 hover:underline'
                }
                to={toLink}
            >
                {text}
            </Link>
        </div>
    );
};

NavbarLogo.propTypes = {
    image: PropType.string.isRequired,
    imageAlt: PropType.string.isRequired,
    toLink: PropType.string.isRequired,
    text: PropType.string.isRequired,
};

export const NavbarLink = ({ text, toLink }) => {
    return (
        <Link
            className={
                'ScrollReveal font-semibold hover:underline rounded-lg px-3 md:px-6 py-1 text-white'
            }
            to={toLink}
        >
            {text}
        </Link>
    );
};

NavbarLink.propTypes = {
    text: PropType.string.isRequired,
    toLink: PropType.string.isRequired,
};
