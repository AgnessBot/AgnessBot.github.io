import React from 'react';

import { HeaderLogo, HeaderButton, FaDiscord } from './HeaderComponents';

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
                        'ScrollReveal mt-5 mb-6 flex flex-col justify-center items-center'
                    }
                >
                    <strong
                        className={'text-5xl text-white font-extrabold mb-5'}
                    >
                        Agness
                    </strong>
                    <p
                        className={
                            'ScrollReveal font-secundary_text font-bold text-center max-w-md self-center text-base text-white'
                        }
                    >
                        Bot of reacion roles, fully customizable embeds, tags,
                        welcomes and leaves
                    </p>
                    <div className={'mt-5 flex items-center justify-center'}>
                        <HeaderButton
                            text="Invite me to your server"
                            toLink={
                                'https://discord.com/oauth2/authorize?client_id=798573830645874718&permissions=8&scope=bot'
                            }
                            color="white"
                        />
                        <HeaderButton
                            text="Join the support server"
                            toLink="https://discord.gg/K63NqEDm86"
                            color="black"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;
