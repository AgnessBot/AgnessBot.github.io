import React from 'react';
import CardHeader from '../components/CardHeader';
const CommandsPage = () => {
    return (
        <div
            className={
                'flex justify-center items-center flex-col px-5 md:px-40'
            }
        >
            <CardHeader
                title="PREFIX"
                description="Default: a?"
                description2="And @mention prefix"
                paragraph1="Mode of use"
                paragraph2="The [ and ] around the argument mean that it is required."
                paragraph3="The &lt; and &gt; around the argument mean that it is optional."
                bgColor="blue"
            />
        </div>
    );
};

export default CommandsPage;
