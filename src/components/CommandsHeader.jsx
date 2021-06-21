import React from 'react';

const CardHeader = () => {
    return (
        <div
            className={'mt-10 bg-gradient-to-tl p-5 rounded from-blue-900 to-blue-burple text-white'}
        >
            <h1 className={'font-black uppercase'}>Prefix</h1>
            <p>You have to use <span className={'font-bold'}>a?</span> at the start of every command</p>
            <p>Otherwise you can mention the bot before the command name</p>
            <h1 className={'text-xl font-semibold mt-2'}>Important Note</h1>
            <p>[ and ] symbols means the argument it&apos;s required</p>
            <p>&lt; and &gt; symbols means the argument it&apos;s optional</p>
        </div>
    );
};

export default CardHeader;
