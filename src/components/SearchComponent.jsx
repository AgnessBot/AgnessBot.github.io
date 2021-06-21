import React from 'react';
import PropType from 'prop-types';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchComponent = ({
    placeholder,
    value = '',
    setValue,
    className
}) => {
    return (
        <>
            <form
                className={
                    `flex items-center bg-gray-color-dark-200 rounded-md px-5 w-full h-10 ${className}`
                }
                onSubmit={(event) => event.preventDefault()}
                onReset={() => setValue('')}
            >
                <input
                    type='text'
                    value={value}
                    maxLength="64"
                    className={
                        'appearance-none flex-1 bg-transparent text-gray-color_text outline-none'
                    }
                    placeholder={placeholder}
                    onChange={(e) => setValue(e.target.value)}
                />
                <label hidden={value}>
                    <FaSearch className="text-gray-color_text" />
                </label>
                <button
                    className="focus:outline-none animate-rotation"
                    type="reset"
                    onClick={() => setValue('')}
                    hidden={!value}
                >
                    <FaTimes className="text-gray-color_text hover:text-white" />
                </button>
            </form>
        </>
    );
};

SearchComponent.propTypes = {
    placeholder: PropType.string.isRequired,
    value: PropType.string.isRequired,
    setValue: PropType.func.isRequired,
    className: PropType.string
};

export default SearchComponent;
