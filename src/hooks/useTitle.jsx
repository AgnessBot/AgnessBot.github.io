import { useState, useEffect } from 'react';

const useTitle = () => {
    const [title, setTitle] = useState();
    const prevTitle = String(document.title);

    useEffect(() => {
        document.title = title || 'Agness';

        return () => (document.title = (prevTitle || 'Agness'));
    }, [title]);

    return (title) => setTitle(title);
};

export default useTitle;
