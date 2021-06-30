import PropType from 'prop-types';
import React from 'react';

const CardComponent = ({
    category,
    description,
    iconComponent,
    iconColor,
    iconSize,
    ...props
}) => {
    return (
        <div
            className="flex justify-center items-center flex-col mx-5 my-7"
            {...props}
        >
            <div className="flex justify-center items-center rounded-full bg-gray-600 h-24 w-24 shadow-xl">
                {React.createElement(iconComponent, {
                    color: iconColor,
                    size: iconSize,
                })}
            </div>
            <div className="flex justify-center items-center flex-col max-w-xs mt-4">
                <h2 className="text-center font-black text-white text-xl">
                    {category}
                </h2>
                <p className="text-gray-300 text-sm text-center">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default CardComponent;

CardComponent.propTypes = {
    category: PropType.string.isRequired,
    description: PropType.string.isRequired,
    iconComponent: PropType.node.isRequired,
    iconColor: PropType.string.isRequired,
    iconSize: PropType.string.isRequired,
};

CardComponent.defaultProps = {
    iconColor: '#ffffff',
    iconSize: 50,
};
