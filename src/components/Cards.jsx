import React from 'react';

import Card from './Card';

const CardsComponent = () => {
    return (
        <div className={'flex flex-col justify-center items-center pt-5 bg-gray-dark'}>
            <Card
                title='Multi-language system.'
                description='You will be able to choose the language you like the most, so that you can understand everything perfectly. At this moment we have two languages (Spanish and English).'
                image='https://i.imgur.com/J9v2Pxw.png'
                imageAlt='lang category'
            />
            <Card
                title='Embed system.'
                description='You will be able to create rich text, to decorate your server, including it in welcomes, leaves, custom commands (tags), and much more! Remember that creativity is up to you, you are your own boss!'
                image='https://i.imgur.com/wzK9ZjF.png'
                imageAlt='embed category'
                positionFirstImage={true}
            />
            <Card
                title='Customized welcomes and leaves.'
                description='You can customize the channel, message, embeds and roles that users or bots will receive when a user enters your server (in case of welcomes) or leaves it. The message form, and decoration is set by you.'
                image='https://i.imgur.com/sPqRBeB.png'
                imageAlt='welcomes and leaves category'
            />
        </div>
    );
};

export default CardsComponent;
