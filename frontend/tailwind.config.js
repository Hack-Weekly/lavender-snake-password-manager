/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'backdrop': '#191825',
        'btn-color': '#865DFF',
        'btn-hover': '#885dff',
        'input-bg': '#20262E',
        'gh-login-btn': '#34AD25',
      },
    },
  },
  plugins: [],
};

