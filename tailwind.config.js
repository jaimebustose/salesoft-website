const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        open: ['Open Sans'],
        poppins: ['Poppins'],
        quick: ['Quicksand'],
      },
      colors: {
        primary: {
          50: '#EBF8FF',
          100: '#D1EEFC',
          200: '#A7D8F0',
          300: '#7CC1E4',
          400: '#55AAD4',
          500: '#3994C1',
          600: '#2D83AE',
          700: '#1D6F98',
          800: '#166086',
          900: '#0B4F71',
        },
        secondary: {
          50: '#DCEEFB',
          100: '#B6E0FE',
          200: '#84C5F4',
          300: '#62B0E8',
          400: '#4098D7',
          500: '#2680C2',
          600: '#186FAF',
          700: '#0F609B',
          800: '#0A558C',
          900: '#003E6B',
        },
        neutral: {
          50: '#F5F7FA',
          100: '#E4E7EB',
          200: '#CBD2D9',
          300: '#9AA5B1',
          400: '#7B8794',
          500: '#616E7C',
          600: '#52606D',
          700: '#3E4C59',
          800: '#323F4B',
          900: '#1F2933',
        },
        neutralv: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#243B53',
          900: '#102A43',
        },
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addUtilities, e }) {
      const justify = ['start', 'center', 'end', 'baseline'];
      const justifyVariants = ['responsive'];

      const utilities = _.map(justify, (alignment) => ({
        [`.justify-items-${e(alignment)}`]: {
          'justify-items': alignment,
        },
      }));

      addUtilities(utilities, justifyVariants);
    }),
  ],
};
