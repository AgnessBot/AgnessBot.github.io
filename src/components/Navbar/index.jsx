import React, { useState } from 'react';

import { NavbarLogo, NavbarLink } from './NavbarComponents';
import { FaHome, FaUserAlt, FaBuffer, FaBars } from 'react-icons/fa';

const NavbarComponent = () => {
    const [navbarState, setNavbarState] = useState(false);
    return (
        <nav className={'bg-blue-burple'}>
            <div
                className={
                    'ScrollReveal flex justify-between items-center flex-col md:flex-row'
                }
            >
                <NavbarLogo toLink="/">Agness</NavbarLogo>
                <div
                    className={
                        'ScrollReveal flex items-center text-base md:text-lg p-2 text-gray-100'
                    }
                >
                    <NavbarLink
                        accessibilityLabel="Home"
                        label="Home"
                        link="/"
                        iconRender={<FaHome />}
                    />
                    <NavbarLink
                        accessibilityLabel="About for Agness"
                        label="About"
                        link="/about"
                        iconRender={<FaUserAlt />}
                    />
                    <NavbarLink
                        accessibilityLabel="Commands from Agness"
                        label="Commands"
                        link="/commands"
                        iconRender={<FaBuffer />}
                    />
                </div>
                <button
                    className="text-white cursor-pointer text-3xl px-3 py-1 rounded bg-transparent md:hidden outline-none focus:outline-none"
                    type="button"
                    onClick={() => setNavbarState(!navbarState)}
                >
                    <FaBars />
                </button>
            </div>
        </nav>
    );
};

export default NavbarComponent;
