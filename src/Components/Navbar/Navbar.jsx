import React, { useRef } from 'react';
 import "./Navbar.css";
import {useState, useEffect} from "react"
import {  Link,NavLink } from 'react-router-dom';


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

//active status




    return (
        <div className="overflow-hidden w-full max-w-screen-xl mx-auto">

            <div className="first-nav h-8 bg-stone-100 flex justify-between px-2
             dark:bg-gray-800 relative items-center lg:h-12 xl:h-16">
                <div className="flex gap-2 ">
                <i class="ri-facebook-circle-line"></i>
                <i class="ri-twitter-line"></i>
                <i class="ri-telegram-line"></i>
                </div>

                <h1 className="text-xl text-sky-500 sm:text-2xl font-serif  font-bold tracking-wider lg:text-3xl xl:text-4xl ">Livin</h1>

                <div className=" gap-2 flex  ">
                <i class="ri-heart-3-line"></i>
                <i class="ri-shopping-cart-2-line"></i>
                </div>
            </div>

            <nav className="h-8 bg-sky-600 items-center justify-between  px-3  w-full text-white  flex dark:bg-sky-800 lg:h-12 xl:h-16">

               <i className="ri-menu-3-line lg:invisible " onClick={toggleMenu}></i>



               <div className=" ">
                   <ul className="text-stone flex invisible lg:visible  md:gap-16 menu lg:text-lg xl:text-xl xl:gap-20 ">
                       <li ><NavLink to="/furniture-website" className={({isActive})=>(isActive ? "text-black" : "text-white")}> Home</NavLink></li>
                       <li><NavLink to="/gallery"  className={({isActive})=>(isActive ? "text-black" : "text-white")}>Gallery</NavLink></li>
                       <li ><NavLink to="/shop"  className={({isActive})=>(isActive ? "text-black" : "text-white")}>Shop</NavLink></li>
                       <li><NavLink to="/contact"  className={({isActive})=>(isActive ? "text-black" : "text-white")}>Contact Us</NavLink></li>
                      
                   </ul>
                   </div>

                   <i className="ri-moon-line relative" onClick={handleThemeSwitch}></i> 
                   
            </nav>

            {isMenuOpen ? (

              <div className=" bg-white w-full  py-7 transition duration-700 delay-400 dark:bg-gray-800">
             
               

              <ul className="text-stone full text-sm flex grid  gap-6  font-bold font-sans text-center dark:text-white">
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