import { useEffect, useState, useContext } from 'react';
import getCommads from '../services/getCommands';
import { CommandsContext } from '../context/CommadsContext';

const useCommads = ({ commadsFilter }) => {
    const [isloading, setLoading] = useState(false);
    const { commadsList, setCommadsList } = useContext(CommandsContext);
    useEffect(() => {
        setLoading(true);
        getCommads().then((commads) => {
            setLoading(false);
            commadsFilter
                ? setCommadsList(commads.filter(commadsFilter))
                : setCommadsList(commads);
        });
    }, [commadsFilter, setCommadsList]);
    return { isloading, commadsList };
};
export default useCommads;
