/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{html,js,vue}'],
  // Toggle dark-mode based on class or data-mode=”dark”
  //darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        'rockGreen': '#68BB88',
        'rockPurple': '#A58ABF',
      },
    },
  },
  plugins: [],
};
