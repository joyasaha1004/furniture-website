/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    
    screens: {
      sm: '300px',
      md: '500px',
      lg: '700px',
      xl: '1000px',
      xxl: '1280px',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: [ "Afacad Flux", "serif"],
       satisfy:["Bebas Neue", "sans-serif"]
    },
    extend:{
     
    },
  },
  plugins: [],
}

