import React from 'react';
import "./Navbar.css";
import {useState, useEffect} from "react"
import { Link } from 'react-router-dom';

const Navbar = () => {

    

    const [isMenuOpen, setMenuOpen] = useState(false);
  

    const toggleMenu = ()=>{
        setMenuOpen(!isMenuOpen)
        Other.current.classList.add("hidden")
    }
    console.log(isMenuOpen)

    // Dark mode start

    const [theme, setTheme] = useState(null);

    useEffect(()=>{
        if(window.matchMedia('(prefer-color-scheme! dark)').matches){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    },[]);
    useEffect(()=>{
      if(theme === "dark"){
          document.documentElement.classList.add("dark");
      }else{
          document.documentElement.classList.remove("dark");
      }
    },[theme]);

    const handleThemeSwitch = ()=>{
        setTheme(theme === "dark" ? "light":"dark");
    }
//    Dark mode close

    return (
        <div className="w-[300px] sm:w-[600px] md:w-[1010px] lg:w-[1270px] xl:w-[1510px] fixed z-50">

            <div className="first-nav h-12 bg-stone-100 p-2 flex space-x-10
             dark:bg-gray-800 sm:w-full sm:space-x-32 md:h-[55px] md:space-x-80 lg:space-x-[410px] lg:h-[65px] lg:pt-2 xl:h-[75px] xl:space-x-[500px]">
                <div className=" gap-2 flex pt-1  sm:px-3 sm:gap-3 lg:px-8 ">
                <i class="ri-facebook-circle-line"></i>
                <i class="ri-twitter-line"></i>
                <i class="ri-telegram-line"></i>
                </div>

                <h1 className="text-2xl text-sky-500 font-serif  font-bold tracking-wider sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">Livin</h1>

                <div className=" gap-2 flex pt-1 pl-3 sm:gap-3 sm:pl-12 ">
                <i class="ri-heart-3-line"></i>
                <i class="ri-shopping-cart-2-line"></i>
                </div>
            </div>

            <nav className="h-12 bg-sky-600  w-full text-white px-3 py-2 text-xl flex dark:bg-sky-800 sm:px-5 md:h-[55px] md:py-3 lg:py-3 lg:h-[65px]">

               <i className="ri-menu-3-line md:invisible " onClick={toggleMenu}></i>



               <div className="md:ml-64 lg:ml-96 xl:ml-[420px] lg:pt-1 xl:pt-1">
                   <ul className="text-stone flex invisible md:visible  md:text-lg md:gap-16 menu lg:text-2xl xl:text-2xl xl:gap-20 ">
                       <li className="active:text-black"><Link to="/" > Home</Link></li>
                       <li><Link to="/gallery">Gallery</Link></li>
                       <li><Link to="/shop">Shop</Link></li>
                       <li><Link to="/contact">Contact Us</Link></li>
                      
                   </ul>
                   </div>

                   <i className="ri-moon-line  relative sm:-right-[45%] md:-right-[19%] lg:-right-[22%] lg:text-4xl xl:-right-[28%] xl:text-4xl" onClick={handleThemeSwitch}></i> 

            </nav>

            {isMenuOpen ? (

              <div className=" bg-white w-full h-60 py-8 transition-all duration-700  delay-300 dark:bg-gray-800">
             
               

              <ul className="text-stone full text-lg flex grid  gap-2 font-bold font-sans text-center dark:text-white">
              <li><Link to="/"> Home</Link></li>
                       <li><Link to="/gallery">Gallery</Link></li>
                       <li><Link to="/shop">Shop</Link></li>
                       <li><Link to="/contact">Contact Us</Link></li>
                      
                   </ul>
            </div>
 ):null}
      

   
        </div>
    );
};

export default Navbar;