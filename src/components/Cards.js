import React from 'react';
import Card from './Card';
const CardsComponent = () => {
    return (
        <div
            className={
                'ScrollReveal flex flex-col justify-center items-center pt-5 bg-gray-dark'
            }
        >
            <Card
                title="Multi-language system."
                description="You will be able to choose the language you like the most, so that you can understand everything perfectly. At this moment we have two languages (Spanish and English)."
                image="https://i.imgur.com/J9v2Pxw.png"
                image_alt="lang category"
                key={0}
            />
            <Card
                title="Embed system."
                description="You will be able to create rich text, to decorate your server, including it in welcomes, sheets, custom commands (tags), and much more! Remember that creativity is up to you, you are your own boss!"
                image="https://i.imgur.com/wzK9ZjF.png"
                image_alt="embed category"
                positionFirstImage={true}
                key={1}
            />
            <Card
                title="Customized welcomes and leaves."
                description="You can customize the channel, message, embeds and roles that users or bots will receive when a user enters your server (in case of welcomes) or leaves it. The message form, and decoration is set by you."
                image="https://i.imgur.com/sPqRBeB.png"
                image_alt="welcomes and leaves category"
                key={2}
            />
        </div>
    );
};
export default CardsComponent;
