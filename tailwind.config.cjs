/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        "headerPrimary": "#672280",
        "headerSecondary": "#A626D3"
      },
      fontFamily: {
        "karla": ['karla', 'sans-serif']
      }
    },
  },
  plugins: [],
}
