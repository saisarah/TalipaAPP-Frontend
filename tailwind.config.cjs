const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["'Open Sans'", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        /**
         * When Changing the primary color
         * also update the color of Antd Primary Color Located
         * in src/App.jsx
         */
        'primary': '#739559',
        'primary-accent-1': '#314026',
        'primary-accent-2': '#526A40',
        'primary-accent-3': '#739559',
        'primary-accent-4': '#94BF73',
        'primary-accent-5': '#B5EA8C',
        'black': '#0F141A',
      },
      fontSize: {
        "md": "calc(1rem - 1px)"
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
