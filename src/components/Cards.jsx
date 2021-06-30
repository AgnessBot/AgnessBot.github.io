import React from 'react';

import Card from './Card';

import { FaGlobe, FaListAlt, FaIdCard } from 'react-icons/fa';
const cardsList = [
    {
        category: 'Multi-language System',
        description:
            "You'll be able to choose the language you speak the most, so that you can understand everything perfectly. We&apos;ve Spanish and English at the moment but you can contribute joining our Discord Server!",
        icon: FaGlobe,
        color: '#FBBF24',
    },
    {
        category: 'Embed System',
        description:
            "You'll be able to create embeds to decorate your server, including it in welcomes, leaves, custom commands (tags), and much more! Be creative as much as you want.",
        icon: FaListAlt,
        color: '#A78BFA',
    },
    {
        category: 'Customized Welcomes and Leaves',
        description:
            "Say Hello to your new members or assign a role to be more organized! By using embeds, you'll be able to send them when a user joins or leaves your server. You also have a wide range of variables to use on them!",
        icon: FaIdCard,
        color: '#60A5FA',
    },
];
const CardsComponent = () => {
    return (
        // <div className={'flex flex-col justify-center items-center pt-5 bg-gray-dark'}>
        <div className="flex justify-center items-center flex-wrap mt-4">
            {cardsList.map((element, index) => (
                <Card
                    key={index}
                    category={element.category}
                    description={element.description}
                    iconComponent={element.icon}
                    iconColor={element.color}
                />
            ))}
        </div>
    );
};

export default CardsComponent;
