import React from 'react';
import "./Hero_Section.css";
import heroBg from "../Assets/hero_bg1.png";
import { useEffect,useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import chair_img1 from "../Assets/chair1.png";
import lamp_img1 from "../Assets/lamp-img1.png";
import sofa_img1 from "../Assets/sofa-img1.png";
import story_img from "../Assets/story-img2.png";

const Hero_Section = () => {

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const animateTo = (direction) => {
      // Prevent repeated animations by setting isAnimating
      if (!isAnimating) {
        setIsAnimating(true);
        gsap.to(".moving", {
          x: direction === "left" ? "-200%" : "0%",
          repeat: -1,
          duration: 5,
          ease: "none",
          onComplete: () => setIsAnimating(false),
        });
      }
    };

    const handleWheel = (dets) => {
      if (dets.deltaY > 0) {
        animateTo("left"); // Scroll down animation
      } else {
        animateTo("right"); // Scroll up animation
      }
    };

    let startY;
    const handleTouchStart = (event) => {
      startY = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
      const currentY = event.touches[0].clientY;
      if (startY && Math.abs(currentY - startY) > 30) { // Adding a threshold for touch movement
        if (currentY < startY) {
          animateTo("left"); // Swipe up
        } else {
          animateTo("right"); // Swipe down
        }
        startY = null; // Reset startY to avoid repeated triggers
      }
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isAnimating]);
  




    return (
        <div className=" overflow-x-hidden pb-10 relative max-w-screen-xl mx-auto font-sans w-full dark:bg-gray-900 dark:text-white md:pb-16 ">
         
   <div className="bg-hero_bg  bg-cover bg-center h-fit  w-full mb-16">

   
    
<div className='relative justify-items-center pt-24 pb-4 sm:justify-items-start sm:px-4 lg:pt-32 xl:pb-6'>
     <div className="w-48  bg-gray-300 p-4 text-xs dark:bg-gray-800 dark:text-white sm:py-5  md:text-lg md:py-7 md:w-64 md:text-md lg:w-80 lg:text-xl xl:text-2xl lg:px-5 xl:w-96 xl:py-8">
       <h2 className="text-lg font-bold  md:leading-normal md:text-2xl lg:text-3xl lg:leading-relaxed">Start Buying Online_</h2>
       <p className=" mt-2 mb-4 leading-loose lg:mb-6 xl:mt-4">where timeless design meets modern craftsmanship. Explore our curated collection of handcrafted furniture, blending comfort and style to elevate your living spaces. </p>
       <div className='flex justify-center'>
       <button className=" px-7 py-2 bg-sky-800 text-white align-center  dark:bg-sky-500 
        hover:bg-transparent hover:text-sky-500 dark:hover:bg-white">Buy Now</button>
     </div></div>
     </div>
   </div>

   {/* scrolling text */}
           
 <div>
  <div className="w-full py-2 bg-black flex px-3 text-white gap-3  mb-32 lg:py-4">
  
  <div className="moving">
    <h1>EXPERIENCE NEW DESIGN</h1>
  </div>

   <div className="moving">
    <h1>EXPERIENCE NEW DESIGN</h1>
  </div>

  <div className="moving">
    <h1>EXPERIENCE NEW DESIGN</h1>
  </div>

  <div className="moving">
    <h1>EXPERIENCE NEW DESIGN</h1>
  </div>

  <div className="moving">
    <h1>EXPERIENCE NEW DESIGN</h1>
  </div>
  <div className="moving">
    <h1>EXPERIENCE NEW DESIGN</h1>
  </div> 
  </div></div>

{/* crafted section */}
  <div className=" xl:flex flex-row-reverse xl:grid grid-cols-2 relative  lg:gap-2 ">

    <div className="flex px-4 gap-3 justify-center md:mt-40  lg:gap-6 xxl:pt-4 xl:self-center ">

      <div className="hero-imglist">
         <img src={chair_img1}></img>
         <span>$20.00</span>
      </div>
      <div className="hero-imglist -mt-8 md:-mt-12 xl:-mt-16">
        <img src={sofa_img1} className=""></img>
         <span>$22.00</span>
      </div>
     
      <div className="hero-imglist">
         <img src={lamp_img1} ></img>
         <span>$15.00</span>
      </div>
   
    </div>

    <div className="px-4 pt-9 font-sans text-xs gap-4 md:pt-12 md:text-lg lg:pt-16 lg:text-xl lg:px-6 xl:text-2xl xl:pt-16 ">
      <h3 className=" text-xl font-bold mb-4 sm:text-2xl md:text-3xl lg:text-4xl xl:leading-normal xl:text-5xl">Crafted with excellent material </h3>
      <span className="leading-loose ">In furniture making, a variety of materials are used depending on the style, function, and durability required. Wood is one of the most common materials, with hardwoods like oak, maple, and walnut prized for their strength and aesthetic appeal, while softwoods like pine are often chosen for more affordable or lightweight options. Sustainable materials like bamboo and reclaimed wood are also becoming more popular due to their eco-friendliness.</span><br></br>

      <button className="px-7 py-2 bg-sky-800 text-white mt-4 dark:bg-sky-500 md:mt-5 xl:px-9 xl:py-4 hover:bg-transparent hover:text-sky-500 dark:hover:bg-white">See More</button>
    </div>

  </div>

  {/* story-section */}

  <div className="mt-10 px-4 xl:flex xl:grid grid-cols-2 text-xs md:text-lg  
      lg:text-xl lg:mt-24 xl:text-2xl xl:mt-52 md:mt-20 lg:px-7  xl:gap-10 xl:p-4 ">
    <div className='xl:px-8 xl:self-center'>
      <img src={story_img} alt="" className="h-60 w-72 sm:w-full sm:h-72 lg:h-96"/>
    </div>
    <div className="mt-4 text-right relative lg:mt-8 xl:-mt-5 xxl:self-center">
      <h2 className="text-xl font-extrabold dark:text-sky-500 text-sky-900 md:text-2xl lg:text-3xl xl:text-5xl">Our Story</h2>
      <p className=" mt-3 leading-loose dark:text-white  xl:mt-5"><span className="text-sky-500 font-extrabold tracking-widest"> Livin </span>  began in a small workshop where a group of passionate craftsmen envisioned creating timeless, handcrafted furniture that blended beauty with function.Over the years, the company partnered with talented designers, launching collections that reflected contemporary trends while staying true to its roots.
       Today,<span className="text-sky-500 font-extrabold tracking-widest"> Livin</span> is known for its durable, elegant furniture, offering sustainable and stylish solutions to homes around the world.
       </p>
    </div>
  </div>

  {/* service section      */}
      <div className=" text-center  px-4 mt-20 sm:px-7 lg:flex flex-wrap lg:justify-evenly lg:px-4  md:mt-28 lg:px-8 xl:mt-36 lg:grid grid-cols-2  xl:grid-cols-3 xl:px-4 lg:gap-6">

        <div className="service-section lg:col-span-1">
        <i class="ri-ball-pen-line"></i>
        <div className=''>
          <h2>MORDERN DESIGN</h2>
          <p>Discover modern, stylish furniture that blends elegance, functionality, and timeless design.
            </p>
        </div>
        </div>

        <div className="service-section lg:col-span-1">
        <i class="ri-price-tag-line"></i>
        <div>
          <h2>HONEST PRICES</h2>
          <p>Quality furniture at honest prices, offering style, comfort, and lasting value.  </p>
        </div>
        </div>

          <div className="service-section lg:col-span-2 xl:col-span-1">
          <i class="ri-service-line"></i>
        <div className=''>
          <h2>GREAT SUPPORT</h2>
          <p className='lg:mx-48 xl:mx-0'>Experience exceptional support, with friendly service every step of the way.</p>
        </div>
        </div>
      </div> 

            
        </div>
    );
};

export default Hero_Section;