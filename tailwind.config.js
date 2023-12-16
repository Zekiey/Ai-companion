/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            keyframes: {
                'moveinleft': {
                    '0%': {
                        opacity: '0',
                        transform: 'translatex(-100px)'
                    },
                    '80%': {
                        transform: 'translateX(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(0)'
                    }
                },
                'moveinright': {
                    '0%': {
                        opacity: '0',
                        transform: 'translatex(100px)'
                    },
                    '80%': {
                        transform: 'translateX(-10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(0)'
                    }

                },
                'moveinbottom': {
                    '0%': {
                        opacity: '0',
                        transform: 'translatey(30px)'
                    },

                    '100%': {
                        opacity: '1',
                        transform: 'translate(0)'
                    }

                },
                'moveinopacity': {
                    '0%': {
                        opacity: '0',

                    },

                    '100%': {
                        opacity: '1',

                    }

                },

            },
            animation: {
                'moveinleft': 'moveinleft 2s ease-in ',
                'moveinright': 'moveinright 2s ease-in ',
                'moveinbottom': 'moveinbottom 1s ease-in ',
                'moveinopacity': 'moveinopacity 2s ease-in ',
            },
            fontFamily: {
                inter: ['"inter"'],
                BeauRivage: ['"Beau Rivage"']
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
        plugins: [],
    },
}