/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'bg': '#1f242d',
        'second': '#323946',
        'main': '#00eeff',
        'main-hover': '#88f7ff'
      }
    }
  },
  plugins: []
};
