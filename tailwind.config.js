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
      md: '600px',
      lg: '1010px',
      xl: '1270px',
      // xxl: '1510px',
       
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

