import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import React from 'react';

export const NavbarLogo = ({ toLink, children }) => {
    return (
        <div className={'flex items-center my-2'}>
            <Link
                className={
                    'text-xl font-semibold text-white px-3 hover:underline'
                }
                to={toLink}
            >
                {children}
            </Link>
        </div>
    );
};

NavbarLogo.propTypes = {
    image: PropType.string.isRequired,
    imageAlt: PropType.string.isRequired,
    toLink: PropType.string.isRequired,
    children: PropType.oneOfType([
        PropType.arrayOf(PropType.node),
        PropType.node,
    ]).isRequired,
};

export const NavbarLink = ({ toLink, children }) => {
    return (
        <Link
            className={
                'ScrollReveal font-semibold hover:underline rounded-lg px-3 md:px-5 py-1 hidden items-center text-white md:flex'
            }
            to={toLink}
        >
            {children}
        </Link>
    );
};

NavbarLink.propTypes = {
    toLink: PropType.string.isRequired,
    children: PropType.oneOfType([
        PropType.arrayOf(PropType.node),
        PropType.node,
    ]).isRequired,
};

export const NavbarButton = ({ children }) => {
    return (
        <Link
            className={
                'bg-transparent border-2 font-bold border-white text-white py-3 px-8 rounded-xl'
            }
            target="_blank"
        >
            {children}
        </Link>
    );
};
NavbarButton.propTypes = {
    children: PropType.oneOfType([
        PropType.arrayOf(PropType.node),
        PropType.node,
    ]).isRequired,
};
export const Sidebar = ({ open }) => {
    return <></>;
};
Sidebar.propTypes = {
    open: PropType.bool.isRequired,
};
