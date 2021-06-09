import PropType from 'prop-types';
import React from 'react';

const CardComponent = ({
    title,
    description,
    image,
    imageAlt,
    positionFirstImage,
}) => {
    return (
        <div
            className={
                'ScrollReveal bg-blue-burple flex flex-col lg:flex-row rounded-2xl p-5 m-5 max-w-6xl'
            }
        >
            {[
                <img
                    className={
                        'h-auto rounded-2xl max-w-3xl self-center w-full hidden sm:block'
                    }
                    src={image}
                    alt={imageAlt}
                    key={0}
                />,
                <div className={'p-5'} key={1}>
                    <h1 className={'font-bold text-2xl text-white'}>{title}</h1>
                    <br />
                    <p className={'text-white text-xl'}>{description}</p>
                </div>,
            ]
                .map((c) => [c])
                .reduce((a, b) =>
                    positionFirstImage ? a.concat(b) : b.concat(a)
                )}
        </div>
    );
};

export default CardComponent;

CardComponent.propTypes = {
    title: PropType.string.isRequired,
    description: PropType.string.isRequired,
    image: PropType.string.isRequired,
    imageAlt: PropType.string.isRequired,
    positionFirstImage: PropType.bool.isRequired,
};

CardComponent.defaultProps = {
    positionFirstImage: false,
};
