const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        'nerko':['Nerko One']
      },
      colors: {
        // primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'primary': '#314026',
        'bg-primary-accent-1': '#526A40',
        'bg-primary-accent-2': '#739559',
        'bg-primary-accent-3': '#94BF73',
        'bg-primary-accent-4': '#B5EA8C',

      }
    },
  },
  plugins: [
    function({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
};
