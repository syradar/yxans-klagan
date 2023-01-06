/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
      '-moz-backface-visibility': 'visible',
      '-webkit-backface-visibility': 'visible',
      '-ms-backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
      '-moz-backface-visibility': 'hidden',
      '-webkit-backface-visibility': 'hidden',
      '-ms-backface-visibility': 'hidden',
    },
  })
})

module.exports = {
  plugins: [backfaceVisibility],
}

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '1em': '1em',
      },
      height: {
        '1em': '1em',
      },
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
      },
      dropShadow: {
        parchment: '0 4px 6px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        '3xl': '1600px',
        '4xl': '1890px',
      },
      transitionTimingFunction: {
        'timing-fast': 'cubic-bezier(0, 0.9, 0, 1)',
      },
      listStyleType: {
        square: 'square',
      },
      gridTemplateColumns: {
        'fr-1/3': '1fr 3fr',
      },
    },
  },
  plugins: [backfaceVisibility],
}
