import React, { useState } from 'react';

import { NavbarLogo, NavbarLink } from './NavbarComponents';
import { FaHome, FaUserAlt, FaBuffer, FaBars } from 'react-icons/fa';

const navLinks = [{
    accessibilityLabel: 'Home',
    label: 'Home',
    link: '/',
    icon: <FaHome />
}, {
    accessibilityLabel: 'Information of Agness',
    label: 'About',
    link: '/about',
    icon: <FaUserAlt />
}, {
    accessibilityLabel: 'Commands of Agness',
    label: 'Commands',
    link: '/commands',
    icon: <FaBuffer />
}];

const NavbarComponent = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <nav className={'bg-blue-burple'}>
            <div
                className={
                    'flex justify-between items-center flex-row px-2.5 py-2'
                }
            >
                <NavbarLogo toLink="/">Agness</NavbarLogo>
                <div
                    className={
                        'ScrollReveal flex items-center text-base md:text-lg p-2 text-gray-100'
                    }
                >
                    {navLinks.map((l, i) => <NavbarLink key={i} {...l} />)}
                </div>
                <button
                    className="text-white cursor-pointer text-3xl px-3 py-1 rounded bg-transparent md:hidden outline-none focus:outline-none"
                    type="button"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <FaBars />
                </button>
                <div
                    style={{ display: sidebarOpen ? 'block' : 'none' }}
                    className={
                        'fixed overflow-auto h-screen w-1/2 bg-gray-color-dark-200 top-0 bottom-0 right-0 z-50'
                    }
                >
                    <div className="navbar__sidebar-items">
                        <div
                            className={
                                'flex justify-center items-center flex-col space-y-12'
                            }
                        >
                            {navLinks.map((l, i) =>
                                <a href={l.link} key={i} className="menu__item">{l.label}</a>)}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;
