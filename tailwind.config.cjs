const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Segoe UI', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        /**
         * When Changing the primary color
         * also update the color of Antd Primary Color Located
         * in src/App.jsx
         */
        'primary': '#314026',
        'primary-accent-1': '#526A40',
        'primary-accent-2': '#739559',
        'primary-accent-3': '#94BF73',
        'primary-accent-4': '#B5EA8C',

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
