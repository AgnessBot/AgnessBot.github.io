import React from 'react';

import PropTypes from 'prop-types';

export const HeaderLogo = ({ image, imageAlt, text }) => {
    return (
        <>
            <div
                className={
                    'ScrollReveal my-5 border-8 border-green-light rounded-full shadow-2xl hidden md:block'
                }
            >
                <img
                    className={'rounded-full'}
                    src={image}
                    alt={imageAlt}
                    width="250"
                    height="250"
                />
            </div>
        </>
    );
};

HeaderLogo.propTypes = {
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export const HeaderButton = ({ text, toLink, color, children }) => {
    const colors = {
        white: {
            BACKGROUND_COLOR: 'bg-gray-100',
            TEXT_COLOR: 'text-black',
            HOVER: 'hover:bg-white',
        },
        black: {
            BACKGROUND_COLOR: 'bg-gray-800',
            TEXT_COLOR: 'text-white',
            HOVER: 'hover:bg-gray-900',
        },
    };
    const chosenColor = colors[color];
    return (
        <div
            className={`px-5 py-3 ${chosenColor.BACKGROUND_COLOR} duration-300 rounded-lg hover:shadow-2xl my-2 ${chosenColor.TEXT_COLOR} ${chosenColor.HOVER} transform hover:scale-110`}
        >
            <a
                className={'font-bold text-center text-sm'}
                href={toLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                {text}
            </a>
            {children}
        </div>
    );
};

HeaderButton.propTypes = {
    text: PropTypes.string.isRequired,
    toLink: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

const HeaderComponent = () => {
    return (
        <header
            className={'bg-blue-500 flex-col py-24'}
            style={{
                backgroundImage:
                    'url(https://cdn.discordapp.com/attachments/798551506202394657/858010306181333042/hibike-euphonium-tanaka-asuka-ogasawara-haruka-nakaseko-kaori-wallpaper-preview_1.png)',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
            }}
        >
            <div className={'flex justify-evenly items-center p-5 h-full'}>
                <div className={'flex flex-col'}>
                    <h1 className="text-7xl text-white font-black text-center mb-5">
                        Agness
                    </h1>
                    <p className="text-4xl text-green-500 font-black text-center mb-5">
                        A multifunctional bot
                    </p>
                    <p
                        className={
                            'font-extrabold max-w-md text-center text-lg text-gray-200'
                        }
                    >
                        Bot of reacion roles, fully customizable embeds, tags,
                        welcomes and leaves.
                    </p>
                    <div
                        className={
                            'mt-5 flex space-x-4 justify-center items-center'
                        }
                    >
                        <HeaderButton
                            toLink={
                                'https://discord.com/oauth2/authorize?client_id=798573830645874718&permissions=8&scope=bot'
                            }
                            text="Invite me to your server"
                            color="white"
                        ></HeaderButton>
                        <HeaderButton
                            toLink="https://discord.gg/K63NqEDm86"
                            text="Join the support server"
                            color="black"
                        ></HeaderButton>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;
