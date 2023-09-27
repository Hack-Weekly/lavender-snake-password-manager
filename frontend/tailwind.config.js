/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'backdrop': '#121212',
        'btn-color': '#A586FD',
        'btn-hover': '#885dff',
        'input-bg': '#292929',
        'gh-login-btn': '#34AD25',
      },
    },
  },
  plugins: [],
};

