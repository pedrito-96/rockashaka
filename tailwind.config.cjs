/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{html,js,vue}'],
  // Toggle dark-mode based on class or data-mode=”dark”
  //darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        'rockGreen': '#68BB88',
        'rockPurple': '#A489BE',
        'rockbg': '#FAFAEC',
        'rockblack': '#3A3A3A',
        'rockMossGreen': '#918868'
      },
    },
  },
  plugins: [],
};
