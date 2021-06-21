const getCommads = () => {
    // const request = await fetch(
    //     'https://agness-469c6-default-rtdb.firebaseio.com/commands.json'
    // );
    // const data = await request.json();
    // return data;
    return fetch(
        'https://agness-469c6-default-rtdb.firebaseio.com/commands.json'
    )
        .then((response) => response.json())
        .then((commads) => commads);
};
export default getCommads;
