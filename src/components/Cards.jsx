import React from 'react';

import Card from './Card';
import embedsCard from '../assets/embeds.png';
import languagesCard from '../assets/languages.png';
import autorolesCard from '../assets/autoroles.png';

const cards = [{
    title: 'Multi-language System',
    description: 'You\'ll be able to choose the language you speak the most, so that you can understand everything perfectly. We&apos;ve Spanish and English at the moment but you can contribute joining our Discord Server!',
    image: languagesCard,
    imageAlt: 'Language Command Example'
}, {
    title: 'Embed System',
    description: 'You\'ll be able to create embeds to decorate your server, including it in welcomes, leaves, custom commands (tags), and much more! Be creative as much as you want.',
    image: embedsCard,
    imageAlt: 'Embed Command Example'
}, {
    title: 'Customized Welcomes and Leaves',
    description: 'Say Hello to your new members or assign a role to be more organized! By using embeds, you\'ll be able to send them when a user joins or leaves your server. You also have a wide range of variables to use on them!',
    image: autorolesCard,
    imageAlt: 'Welcome Autorole Command Example'
}];

const CardsComponent = () => {
    return (
        <div className={'flex flex-col justify-center items-center pt-5 bg-gray-dark'}>
            {cards.map((c, i) => <Card key={i} positionFirstImage={i % 2 !== 0} {...c} />)}
        </div>
    );
};

export default CardsComponent;
