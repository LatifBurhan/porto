/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        pink: '#D4018D',
        whiteCustom: '#D9D9D9',
        blue: '#2D46B9',
        blackCustom: '#010204',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  
  plugins: [],
}
