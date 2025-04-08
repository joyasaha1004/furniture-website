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
      xl: '1200px',
      '2xl': '1800px',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: [ "Afacad Flux", "serif"],
       satisfy:["Bebas Neue", "sans-serif"]
    },
    extend:{
      backgroundImage: {
        'hero_bg': "url('../Assets/hero_bg1.png')",
        'gallery_bg': "url('../Assets/gallery_bg.png')",
        'lamp_img': "url('../Assets/lamp1.png')",
        'shop_bg':"url('../Assets/shop_bg2.png')",
        'contact_bg':"url('../Assets/contact_bg.png')"
      
       
      }
    },
  },
  plugins: [],
}

