/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  darkMode:'class',
  theme: {
      container: {
        padding: '2rem',
         center:true
      },
      colors: {
        "white":"#fff",
        "bodyBg":"#1B2430",
        'regalBlue': '#243c5a',
        "black":"#000",
        "secondColor":"rgb(31 41 55/1)",
        "cyan":'#3792e4'
      },
    
  },
  plugins: [],
}
