import React, { useRef } from 'react';
import PropType from 'prop-types';
import { FaSearch, FaTimes } from 'react-icons/fa';
const SearchComponent = ({
    placeholder,
    value,
    onChange,
    onReset,
    onBlur,
    type,
    state,
    setState,
    inputRef,
}) => {
    // const filterItems = (value) => {
    //     if(!filter){
    //         return
    //     }
    // }
    // const initialState = {
    //     items: [],
    //     query: '',
    // };
    // const searchItemsReducer = (state, action) => {
    //     switch (action.type) {
    //         case 'setQuery':
    //             return {
    //                 ...state,
    //                 query: action.payload,
    //             };
    //         case 'setItems':
    //             return {
    //                 ...state,
    //                 items: action.payload,
    //             };
    //         case 'reset':
    //             return {
    //                 items: [],
    //                 query: '',
    //             };
    //     }
    // };
    // const [state, dispatch] = useReducer(searchItemsReducer, initialState);
    // const handleChange = (event) => {
    //     dispatch({
    //         type: 'setQuery',
    //         payload: event.target.value.trim(),
    //     });
    // };
    return (
        <>
            <form
                className={
                    'flex items-center bg-gray-color-dark-200 rounded-md px-5 w-full h-10'
                }
                onSubmit={(event) => event.preventDefault()}
                onReset={onReset}
            >
                <input
                    ref={inputRef}
                    type={type}
                    value={value}
                    maxLength="64"
                    className={
                        'appearance-none flex-1 bg-transparent text-gray-color_text outline-none'
                    }
                    placeholder={placeholder}
                    onChange={onChange}
                />
                <label hidden={value}>
                    <FaSearch className="text-gray-color_text" />
                </label>
                <button
                    className="focus:outline-none animate-rotation"
                    type="reset"
                    onClick={() => {
                        console.log(inputRef.current.value);
                        setState('');
                    }}
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
    onChange: PropType.func.isRequired,
    onReset: PropType.func.isRequired,
    onBlur: PropType.func.isRequired,
};
SearchComponent.defaultProps = {
    type: 'text',
};
export default SearchComponent;
