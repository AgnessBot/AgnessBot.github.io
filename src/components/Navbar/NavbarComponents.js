import React from 'react';
export const NavbarLogo = ({ image, image_alt, text }) => {
    return (
        <div className={'ScrollReveal flex items-center my-2'}>
            <img
                className={'rounded-full'}
                src={image}
                alt={image_alt}
                width="40"
            />
            <a
                className={
                    'text-xl font-semibold text-white px-3 hover:underline'
                }
            >
                {text}
            </a>
        </div>
    );
};
export const NavbarLink = ({ text, toLink }) => {
    return (
        <a
            className={
                'ScrollReveal font-semibold hover:underline rounded-lg px-3 md:px-6 py-1'
            }
            href={toLink}
        >
            {text}
        </a>
    );
};
