import React from 'react';
export const HeaderLogo = ({ image, image_alt, text }) => {
    return (
        <div>
            <div
                className={
                    'ScrollReveal my-5 border-8 border-green-light rounded-full shadow-2xl hidden md:block'
                }
            >
                <div className={'w-40'}>
                    <img
                        className={'rounded-full'}
                        src={image}
                        alt={image_alt}
                    />
                </div>
            </div>
            <p
                className={
                    'ScrollReveal text-center text-white md:text-4xl text-5xl font-black mb-5'
                }
            >
                {text}
            </p>
        </div>
    );
};
export const HeaderButton = ({ text, toLink, color }) => {
    const colors = {
        white: {
            bg_color: 'bg-white',
            text_color: 'text-black',
        },
        black: {
            bg_color: 'bg-gray-dark',
            text_color: 'text-white',
        },
    };
    const chosenColor = colors[color];
    return (
        <div
            className={`ScrollReveal px-8 py-2 ${chosenColor.bg_color} rounded-2xl mx-4 hover:shadow-2xl my-2`}
        >
            <a
                className={`font-semibold ${chosenColor.text_color} text-center`}
                href={toLink}
                target="_blank"
            >
                {text}
            </a>
        </div>
    );
};
