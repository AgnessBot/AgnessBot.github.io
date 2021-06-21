import React, { useEffect, useState } from 'react';

import CommandsHeader from '../components/CommandsHeader';
import SearchComponent from '../components/SearchComponent';

import usePromise from '../hooks/usePromise';
import { getCommands } from '../services';

const CommandsPage = () => {
    const [value, setValue] = useState('');
    const [commands, setCommands] = useState([]);
    const { data } = usePromise(getCommands());

    console.log(commands);

    useEffect(() => {
        if (data) {
            setCommands(data.commands.filter(({ name }) => name.match(new RegExp(value, 'i'))));
        }
    }, [value]);

    return (
        <>
            <div className="flex justify-center items-center flex-col px-5 md:px-40">
                <CommandsHeader />
                <SearchComponent
                    placeholder="Find commands"
                    className="mt-4"
                    value={value}
                    setValue={(v) => setValue(v)}
                />
                <strong className="text-white text-7xl font-bold m-20">
                    {value}
                </strong>
            </div>
        </>
    );
};

export default CommandsPage;
