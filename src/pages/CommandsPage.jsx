import React, { useState, useEffect, useRef, useReducer } from 'react';
import { Helmet } from 'react-helmet';
import CardHeader from '../components/CardHeader';
import SearchComponent from '../components/SearchComponent';
import getCommads from '../services/getCommands';

// import CommandsContext from '../context/CommadsContext';
const CommandsPage = () => {
    const [isloading, setLoading] = useState(false);
    const [commandsList, setCommadsList] = useState([]);
    const [value, setValue] = useState('');
    useEffect(() => {
        setLoading(true);
        getCommads().then((commads) => {
            setLoading(false);
            setCommadsList(commads);
        });
    }, [setCommadsList]);
    const inputRef = useRef();
    const initialState = {
        items: [],
        query: '',
    };
    const searchItemsReducer = (state, action) => {
        switch (action.type) {
            case 'setQuery':
                return {
                    ...state,
                    query: action.payload,
                };
            case 'setItems':
                return {
                    ...state,
                    items: action.payload,
                };
            case 'reset':
                return {
                    items: [],
                    query: '',
                };
        }
    };
    const [state, dispatch] = useReducer(searchItemsReducer, initialState);
    const onChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <>
            <div className="flex justify-center items-center flex-col px-5 md:px-40">
                <Helmet>
                    <title>Agness</title>
                    <meta
                        name="description"
                        content="I'm a bot in charge of interaction, entertainment and giving roles through reactions, so that your server is a much more attractive and pleasant place."
                    />
                    <meta
                        property="og:image"
                        content="https://agnessbot.github.io/src/assets/agness_rounded.png"
                    />
                    <meta property="og:title" content="Agness" />
                    <meta
                        property="og:description"
                        content="I'm a bot in charge of interaction, entertainment and giving roles through reactions, so that your server is a much more attractive and pleasant place."
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="https://i.imgur.com/VdzEQc3.png"
                    />
                </Helmet>
                <CardHeader
                    title="PREFIX"
                    description="Default: a?"
                    description2="And @mention prefix"
                    paragraph1="Mode of use"
                    paragraph2="The [ and ] around the argument mean that it is required."
                    paragraph3="The &lt; and &gt; around the argument mean that it is optional."
                    bgColor="blue"
                />
                <SearchComponent
                    placeholder="Find commands"
                    value={value}
                    onChange={onChange}
                    state={value}
                    setState={setValue}
                    inputRef={inputRef}
                />
                <strong className="text-white text-7xl font-bold m-20">
                    {value}
                </strong>
            </div>
        </>
    );
};

export default CommandsPage;
