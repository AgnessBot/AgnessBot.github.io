import React from 'react';
import { NavbarLogo, NavbarLink } from './NavbarComponents';
const NavbarComponent = () => {
    return (
        <nav className={'ScrollReveal px-4 py-2 mx-auto bg-blue-burple'}>
            <div
                className={
                    'flex justify-between items-center flex-col md:flex-row'
                }
            >
                <NavbarLogo
                    image="https://i.imgur.com/VdzEQc3.png"
                    image_alt="agness logo"
                    text="Agness"
                />
                <div
                    className={
                        'ScrollReveal flex items-center text-base md:text-lg p-2 text-gray-100'
                    }
                >
                    <NavbarLink text="Home" toLink="#" />
                    <NavbarLink text="About" toLink="#" />
                    <NavbarLink text="Commands" toLink="#" />
                </div>
            </div>
        </nav>
    );
};
export default NavbarComponent;
