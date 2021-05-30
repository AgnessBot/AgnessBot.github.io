module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                secundary_text: ['Quicksand'],
            },
            colors: {
                gray: {
                    dark: '#36393F',
                    extra_dark: '#2F3136',
                    color_text: '#B9BBBE',
                    color_hover: '#3B3D42',
                    'color_dark-100': '#36393F',
                    'color-dark-200': '#202225',
                    'bg-scrollbar': '#2E3338',
                },
                blue: {
                    burple: '#5865F2',
                },
                purple: {
                    discordOld: '#7289DA',
                    discordOld_hover: '#7B8FD4',
                },
                green: {
                    light: '#85ED91',
                    hover: '#359553',
                },
                red: {
                    circle: '#ED4245',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('tailwind-scrollbar')],
};
