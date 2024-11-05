import React from 'react';
import "./Hero_Section.css";
import heroBg from "../Assets/hero_bg1.png";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import chair_img1 from "../Assets/chair1.png";
import lamp_img1 from "../Assets/lamp-img1.png";
import sofa_img1 from "../Assets/sofa-img1.png";
import story_img from "../Assets/story-img2.png";

const Hero_Section = () => {

  useEffect(() => {
    const handleWheel = (dets) => {
      if (dets.deltaY > 0) {
        gsap.to(".moving", {
          transform: "translateX(-200%)",
          repeat: -1,
          duration: 5,
          ease: "none",
        });
      } else {
        gsap.to(".moving", {
          transform: "translateX(0%)",
          repeat: -1,
          duration: 5,
          ease: "none",
        });
      }
    };
   
  //   const handleTouchMove = (event) => {
  //     // Implement similar logic for touch events here
  //     const touchY = event.touches[0].clientY;
  //     if (touchY > 0) {
  //       // Handle scrolling down
  //       gsap.to(".moving", {
  //         transform: "translateX(-200%)",
  //         repeat: -1,
  //         duration: 5,
  //         ease: "none",
  //       });
  //     } else {
  //       // Handle scrolling up
  //       gsap.to(".moving", {
  //         transform: "translateX(0%)",
  //         repeat: -1,
  //         duration: 5,
  //         ease: "none",
  //       });
  //     }
  //   };

    window.addEventListener("wheel", handleWheel);
  //   window.addEventListener("touchmove", handleTouchMove);

     return () => {
       window.removeEventListener("wheel", handleWheel);
  //     window.removeEventListener("touchmove", handleTouchMove);
    };
   }, []);
   useEffect(() => {
      gsap.to(".moving", {
        x: "-200%", // Adjust the distance as needed
        duration: 5, // The duration of the animation
        ease: "none",
        scrollTrigger: {
          trigger: ".moving",  // Element that triggers the scroll
          start: "top center", // Start when the element is at the center of the viewport
          end: "bottom top",   // End when the element scrolls out of view
          scrub: 1,            // Smoothly connects animation to scroll position
          markers: false,      // Set to true to see the start/end markers for debugging
        },
      });
    }, []);
  




    return (
        <div className="w-[300px] overflow-x-hidden font-sans dark:bg-gray-900 pt-20 dark:text-white pb-7 sm:pb-9 sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1280px] xxl:w-[1510px]" >
         
   <div className="">
    
<div>
  <img src={heroBg} className=" w-full h-[455px]  md:h-[650px] lg:h-[790px] xl:h-[980px]"></img>
  </div>
     <div className="w-56 h-[315px] relative bg-gray-300 px-5 py-4  -right-9 -top-80 text-sm dark:bg-gray-800 dark:text-white sm:w-60 sm:h-[340px] sm:-top-[350px] sm:py-5 md:w-72 md:h-[440px] md:text-lg md:py-7 md:-top-[450px] lg:text-xl lg:w-80 lg:h-[460px] lg:-top-[470px] xl:w-[380px] xl:h-[590px] xl:-top-[595px] xl:text-2xl xl:px-7 xl:py-8">
       <h2 className="text-xl font-bold sm:text-2xl md:text-3xl md:leading-normal lg:text-4xl lg:leading-normal xl:text-[40px] xl:leading-[65px]">Start Buying Online_</h2>
       <p className=" mt-2  leading-loose xl:mt-4">where timeless design meets modern craftsmanship. Explore our curated collection of handcrafted furniture, blending comfort and style to elevate your living spaces. </p>
       <button className="relative px-7 py-2 bg-sky-800 text-white mx-9 my-5 dark:bg-sky-500 sm:my-4 md:px-10 md:mx-12 xl:px-12 xl:py-3 xl:ml-16  xl:my-8
        hover:bg-transparent hover:text-sky-500 dark:hover:bg-white">Buy Now</button>
     </div>
     
   </div>

   {/* scrolling text */}
           
<div>
  <div className="w-full h-16 pt-4 bg-black flex px-3 text-white gap-3 -mt-60 mb-20 md:-mt-[350px] md:h-20 md:pt-6 lg:h-32 lg:pt-10 xl:-mt-[440px] xl:h-36 xl:pt-12">
  
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
  <div className="mt-40 xl:flex flex-row-reverse md:-ml-1 relative lg:left-2 lg:mt-60 lg:gap-2 xl:-left-0 xl:gap-4 xxl:gap-10">

    <div className="flex px-4 gap-3 sm:ml-24 md:ml-40 md:mt-20 lg:mt-28 lg:ml-64 lg:gap-6 xl:mt-40 xl:mx-5 xxl:mx-3 xxl:mt-56">

      <div className="hero-imglist">
         <img src={chair_img1} ></img>
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

    <div className="px-4 pt-9 font-sans text-sm gap-4 md:pl-10 md:pt-12  md:text-lg md:w-[650px] lg:w-[950px] lg:pt-16 lg:text-xl xl:text-2xl xl:w-[1250px] xl:pt-16 xxl:pt-40 xxl:mx-10 xxl:pl-2 ">
      <h3 className=" text-2xl font-bold mb-4 sm:text-3xl md:text-4xl lg:text-5xl lg:leading-normal xl:text-6xl xl:leading-[75px]">Crafted with excellent material </h3>
      <span className="leading-loose sm:leading-loose  md:leading-[40px] xl:leading-[60px]">In furniture making, a variety of materials are used depending on the style, function, and durability required. Wood is one of the most common materials, with hardwoods like oak, maple, and walnut prized for their strength and aesthetic appeal, while softwoods like pine are often chosen for more affordable or lightweight options. Sustainable materials like bamboo and reclaimed wood are also becoming more popular due to their eco-friendliness.</span><br></br>

      <button className="px-7 py-2 bg-sky-800 text-white mt-4 dark:bg-sky-500 md:mt-5 xl:px-9 xl:py-4 hover:bg-transparent hover:text-sky-500 dark:hover:bg-white">See More</button>
    </div>

  </div>

  {/* story-section */}

  <div className="mt-10 px-4 xl:flex xl:grid grid-cols-2 gap- md:mt-60 xl:mt-80 xl:gap-4">
    <div>
      <img src={story_img} alt="" className="h-60 w-72 sm:w-full sm:h-72 md:w-[500px] 
      md:h-80 md:ml-20 lg:w-[630px] lg:ml-44 lg:h-[430px] xl:w-[650px] xl:h-[530px] xl:ml-5"/>
    </div>
    <div className="mt-4 text-right sm:mt-8 md:right-6 md:mt-10 relative lg:right-4 lg:px-7 lg:mt-16 xl:-right-5 xl:-mt-5">
      <h2 className="text-2xl font-extrabold dark:text-sky-500 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-sky-900">Our Story</h2>
      <p className="text-sm mt-3 leading-loose dark:text-white md:text-lg md:leading-[40px]
      lg:text-xl lg:leading-[50px] xl:text-2xl xl:leading-[60px] xl:mt-5"><span className="text-sky-500 font-extrabold tracking-widest"> Livin </span>  began in a small workshop where a group of passionate craftsmen envisioned creating timeless, handcrafted furniture that blended beauty with function.Over the years, the company partnered with talented designers, launching collections that reflected contemporary trends while staying true to its roots.
       Today,<span className="text-sky-500 font-extrabold tracking-widest"> Livin</span> is known for its durable, elegant furniture, offering sustainable and stylish solutions to homes around the world.
       </p>
    </div>
  </div>

  {/* service section      */}
      <div className=" text-center px-4 mt-28 sm:px-7 lg:grid grid-cols-3 lg:px-4 xl:gap-16 md:gap-10  md:mt-52 lg:px-10 xl:mt-72 ">

        <div className="service-section">
        <i class="ri-ball-pen-line"></i>
        <div>
          <h2>MORDERN DESIGN</h2>
          <p>Discover modern, stylish furniture that blends elegance, functionality, and timeless design.
            </p>
        </div>
        </div>

        <div className="service-section">
        <i class="ri-price-tag-line"></i>
        <div>
          <h2>HONEST PRICES</h2>
          <p>Quality furniture at honest prices, offering style, comfort, and lasting value.  </p>
        </div>
        </div>

          <div className="service-section">
          <i class="ri-service-line"></i>
        <div>
          <h2>GREAT SUPPORT</h2>
          <p>Experience exceptional support, with friendly service every step of the way.</p>
        </div>
        </div>
      </div>

            
        </div>
    );
};

export default Hero_Section;