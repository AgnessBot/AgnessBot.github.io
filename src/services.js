export const getCommands = () =>
    import('./assets/commands.json')
        .then((m) => m.default);
