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

export const NavbarLink = ({ accessibilityLabel, label, link, iconRender }) => {
    return (
        <Link
            to={link}
            aria-label={accessibilityLabel}
            className={
                'ScrollReveal hover:underline px-3 md:px-5 py-1 hidden items-center md:flex'
            }
        >
            <div className={'mx-4'}>
                <span className={'text-white text-base font-semibold'}>
                    {label}
                </span>
            </div>
            {iconRender}
        </Link>
    );
};

NavbarLink.propTypes = {
    accessibilityLabel: PropType.string.isRequired,
    label: PropType.string.isRequired,
    link: PropType.string.isRequired,
    iconRender: PropType.node.isRequired,
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
