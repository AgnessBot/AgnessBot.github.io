import React from 'react';

import { HeaderLogo, HeaderButton } from './HeaderComponents';
// import { FaRobot, FaDiscord } from 'react-icons/fa';

const HeaderComponent = () => {
    return (
        <header className={'flex-col bg-blue-burple py-10'}>
            <div
                className={
                    'ScrollReveal flex justify-evenly items-center p-5 h-full'
                }
            >
                <HeaderLogo
                    image="https://i.imgur.com/VdzEQc3.png"
                    imageAlt="agness logo"
                    text="Agness"
                />
                <div
                    className={
                        'ScrollReveal flex justify-center mt-5 mb-6 flex-col sm:flex-row sm:text-sm'
                    }
                >
                    <HeaderButton
                        text="Invite me to your server"
                        toLink={
                            'https://discord.com/oauth2/authorize?client_id=798573830645874718&permissions=8&scope=bot'
                        }
                    />
                    <p>
                        Bot of reaction roles, fully customizable embeds, tags,
                        welcomes and leaves
                    </p>
                    <div className={'mt-5 flex space-x-4'}>
                        <HeaderButton
                            toLink={
                                'https://discord.com/oauth2/authorize?client_id=798573830645874718&permissions=8&scope=bot'
                            }
                            text="Invite me to your server"
                            color="white"
                        />
                        <HeaderButton
                            toLink="https://discord.gg/K63NqEDm86"
                            text="Join the support server"
                            color="black"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;
