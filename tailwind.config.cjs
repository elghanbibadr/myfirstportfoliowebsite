/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html./src/**/*.{js,jsx,}",
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
      },
    
  },
  plugins: [],
}
