import React from 'react';

import { HeaderLogo, HeaderButton } from './HeaderComponents';

const HeaderComponent = () => {
    return (
        <header className={'bg-blue-burple flex-col'}>
            <div
                className={
                    'ScrollReveal flex justify-center items-center flex-col p-5 h-full'
                }
            >
                <HeaderLogo
                    image="https://i.imgur.com/VdzEQc3.png"
                    imageAlt="agness logo"
                    text="Agness"
                />
                <p
                    className={
                        'ScrollReveal font-secundary_text font-bold text-center max-w-md self-center text-base text-white'
                    }
                >
                    Bot of reaction roles, fully customizable embeds, tags,
                    welcomes and leaves
                </p>
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
                        color="white"
                    />
                    <HeaderButton
                        text="Join the support server"
                        toLink="https://discord.gg/K63NqEDm86"
                        color="black"
                    />
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;
