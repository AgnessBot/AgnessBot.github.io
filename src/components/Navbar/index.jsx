import React, { useState } from 'react';

import { NavbarLogo, NavbarLink } from './NavbarComponents';
import { FaHome, FaUserAlt, FaBuffer, FaBars } from 'react-icons/fa';

const NavbarComponent = () => {
    const [navbarState, setNavbarState] = useState(false);
    console.log(navbarState);
    return (
        <nav className={'px-4 py-3 mx-auto bg-blue-burple'}>
            <div className={'flex justify-between items-center flex-row'}>
                <NavbarLogo toLink="/">Agness</NavbarLogo>
                <div
                    className={
                        'ScrollReveal flex items-center text-base md:text-lg p-2 text-gray-100'
                    }
                >
                    <NavbarLink toLink="/">
                        Home
                        <FaHome className="ml-3" />
                    </NavbarLink>
                    <NavbarLink toLink="/about">
                        About
                        <FaUserAlt className="ml-3" />
                    </NavbarLink>
                    <NavbarLink toLink="/commands">
                        Commands
                        <FaBuffer className="ml-3" />
                    </NavbarLink>
                    <button
                        className="text-white cursor-pointer text-3xl px-3 py-1 rounded bg-transparent md:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarState(!navbarState)}
                    >
                        <FaBars />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;
