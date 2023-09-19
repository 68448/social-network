/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        'dark-grey': '#222',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
