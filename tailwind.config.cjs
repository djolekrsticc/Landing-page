/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '5.5xl': '3.375rem',
      },
      colors: {
        'primary-color': '#90e4e4',
        'primary-color-light': '#67d0dc'
      },
      spacing: {
        '112': '28rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
