import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import React from 'react';

export const NavbarLogo = ({ image, imageAlt, text }) => {
    return (
        <div className={'flex items-center my-2'}>
            <img className={'rounded-full'} src={image}
                alt={imageAlt} width='40' />
            <a className={'text-xl font-semibold text-white px-3 hover:underline'}>
                {text}
            </a>
        </div>
    );
};

NavbarLogo.propTypes = {
    image: PropType.string,
    imageAlt: PropType.string,
    text: PropType.string,
};

export const NavbarLink = ({ text, toLink }) => {
    return (
        <Link className={'ScrollReveal font-semibold hover:underline rounded-lg px-3 md:px-6 py-1'}
            to={toLink}>
            {text}
        </Link>
    );
};

NavbarLink.propTypes = {
    text: PropType.string.isRequired,
    toLink: PropType.string.isRequired,
};
