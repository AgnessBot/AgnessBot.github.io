import React from 'react';
import PropType from 'prop-types';
import tailwindcss from 'tailwindcss/colors';
const VARIANT_MAPS = {
    blue: 'from-blue-900 to-blue-burple text-white',
};
const CardHeader = ({
    title,
    description,
    description2,
    paragraph1,
    paragraph2,
    paragraph3,
    bgColor,
}) => {
    return (
        <div
            className={`mt-10 bg-gradient-to-tl p-5 rounded ${VARIANT_MAPS[bgColor]}`}
        >
            <h1 className={'font-black'}>{title}</h1>
            <p>{description}</p>
            <p>{description2}</p>
            <h1 className={'text-xl font-semibold'}>{paragraph1}</h1>
            <p>{paragraph2}</p>
            <p>{paragraph3}</p>
        </div>
    );
};
export default CardHeader;
CardHeader.propTypes = {
    title: PropType.string.isRequired,
    description: PropType.string.isRequired,
    description2: PropType.string.isRequired,
    paragraph1: PropType.string.isRequired,
    paragraph2: PropType.string.isRequired,
    paragraph3: PropType.string.isRequired,
    bgColor: PropType.oneOf(Object.keys(tailwindcss)).isRequired,
};
