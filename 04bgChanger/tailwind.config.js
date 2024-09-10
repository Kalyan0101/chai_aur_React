/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lavender': '#e6e6fa',
        'grey': '#808080'
      }
    },
  },
  plugins: [],
}