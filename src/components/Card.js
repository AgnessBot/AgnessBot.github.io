import React from 'react';
const CardComponent = ({
    title,
    description,
    image,
    image_alt,
    positionFirstImage = false,
}) => {
    return (
        <div
            className={
                'ScrollReveal bg-purple-discordOld flex flex-col lg:flex-row rounded-2xl p-5 m-5'
            }
        >
            {[
                [
                    <img
                        className={
                            'h-auto rounded-2xl max-w-3xl self-center w-full hidden sm:block'
                        }
                        src={image}
                        alt={image_alt}
                    />,
                ],
                [
                    <div className={'p-5'}>
                        <h1 className={'font-bold text-2xl text-white'}>
                            {title}
                        </h1>
                        <br />
                        <p className={'text-white text-xl'}>{description}</p>
                    </div>,
                ],
            ].reduce((a, b) =>
                positionFirstImage ? a.concat(b) : b.concat(a)
            )}
        </div>
    );
};
export default CardComponent;
