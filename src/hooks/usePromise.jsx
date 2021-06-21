import { useEffect, useState } from 'react';

const usePromise = (promise) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const resolve = () =>
        promise
            .then((r) => {
                setLoading(false);
                setData(r);
                setError(null);
            }).catch((e) => setError(e));

    useEffect(() => resolve(), []);

    return {
        data,
        loading,
        error
    };
};

export default usePromise;
