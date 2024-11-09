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
        <div className="w-[300px] sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1280px] xxl:w-[1510px] fixed z-50">

            <div className="first-nav h-12 bg-stone-100 p-2 flex space-x-10
             dark:bg-gray-800 sm:w-full sm:space-x-20 md:h-[55px] md:space-x-44 lg:space-x-[270px] lg:h-[65px] lg:pt-2 xl:h-[75px] xl:space-x-[380px] xxl:space-x-[470px]">
                <div className=" gap-2 flex pt-1  sm:px-3 sm:gap-3 lg:px-8 ">
                <i class="ri-facebook-circle-line"></i>
                <i class="ri-twitter-line"></i>
                <i class="ri-telegram-line"></i>
                </div>

                <h1 className="text-2xl text-sky-500 font-serif  font-bold tracking-wider sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl xxl:mt-1">Livin</h1>

                <div className=" gap-2 flex pt-1 pl-3 sm:gap-3 sm:pl-12 ">
                <i class="ri-heart-3-line"></i>
                <i class="ri-shopping-cart-2-line"></i>
                </div>
            </div>

            <nav className="h-12 bg-sky-600  w-full text-white px-3 py-2 text-xl flex dark:bg-sky-800 sm:px-5 md:h-[55px] md:py-3 lg:py-3 lg:h-[65px]">

               <i className="ri-menu-3-line lg:invisible " onClick={toggleMenu}></i>



               <div className=" lg:ml-52 xl:ml-[350px] lg:pt-1 xl:pt-1 xxl:ml-[400px]">
                   <ul className="text-stone flex invisible lg:visible  md:text-lg md:gap-16 menu lg:text-2xl xl:text-2xl xl:gap-20 ">
                       <li className="active:text-black"><Link to="/furniture-website" > Home</Link></li>
                       <li><Link to="/gallery">Gallery</Link></li>
                       <li><Link to="/shop">Shop</Link></li>
                       <li><Link to="/contact">Contact Us</Link></li>
                      
                   </ul>
                   </div>

                   <i className="ri-moon-line  relative sm:-right-[33%] md:-right-44 lg:-right-40 lg:text-4xl xl:-right-[15%] xl:text-4xl xxl:-right-[28%]" onClick={handleThemeSwitch}></i> 

            </nav>

            {isMenuOpen ? (

              <div className=" bg-white w-full h-60 py-8 transition-all duration-700  delay-300 dark:bg-gray-800">
             
               

              <ul className="text-stone full text-lg flex grid  gap-2 font-bold font-sans text-center dark:text-white">
              <li><Link to="/furniture-website"> Home</Link></li>
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