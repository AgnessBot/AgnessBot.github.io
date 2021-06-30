import Link from '../Link';
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
    toLink: PropType.string.isRequired,
    children: PropType.oneOfType([
        PropType.arrayOf(PropType.node),
        PropType.node,
    ]).isRequired,
};

export const NavbarLink = ({ accessibilityLabel, label, link, icon }) => {
    //hover:text-black hover:text-opacity-100 hover:bg-white hover:bg-blue-blurple_hover
    return (
        <Link
            to={link}
            aria-label={accessibilityLabel}
            className={
                ' px-2 py-1.5 hidden items-center md:flex md:px-5 duration-300 hover:bg-gray-600 rounded-3xl mx-1.5'
            }
        >
            <div className={'mx-4'}>
                <span className={'text-base font-semibold'}>{label}</span>
            </div>
            {icon}
        </Link>
    );
};

NavbarLink.propTypes = {
    accessibilityLabel: PropType.string.isRequired,
    label: PropType.string.isRequired,
    link: PropType.string.isRequired,
    icon: PropType.node.isRequired,
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
