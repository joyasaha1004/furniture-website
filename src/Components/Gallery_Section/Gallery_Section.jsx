import React from 'react';
import "./Gallery_Section.css"

import gallery_bg from "../Assets/gallery_bg.png";
import lamp_img1 from "../Assets/lamp-img1.png";
import decor2 from "../Assets/decor2.png";
import table1 from "../Assets/table4.png"
import sofa1 from "../Assets/sofa2.png"
import chair1 from "../Assets/chair1.png"
import shelf1 from "../Assets/shelf3.png"


const Gallery_Section = () => (
  <div className=" font-sans relative w-full dark:bg-gray-900 dark:text-white pb-7 sm:pb-9 overflow-x-hidden max-w-screen-xl mx-auto">


    <div className='relative bg-gallery_bg bg-cover bg-center pb-7 sm:pb-10 md:pb-16 lg:pb-28 xl:pb-40'>

      <div className="text-center relative pt-20 text-xs sm:pt-20 md:pt-24 lg:text-lg lg:pt-40 xl:pt-52 ">
        <h1 className="text-2xl leading-snug  px-5 text-sky-500 font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"> Discover Quality You Can Trust</h1>
        <p className=" text-white px-2 mt-2 leading-relaxed sm:px-6 md:px-20  lg:px-28 lg:mt-4 xl:px-72"> Explore our collection of hand-picked furniture, crafted with precision and passion to elevate your home.</p>
        <button className="bg-transparent text-sky-800 border-2 border-sky-800 mt-6 px-2 py-2  font-bold hover:bg-sky-800 hover:text-white">SHOP NOW</button>

        <div className="text-gray-400 text-xs justify-center pt-4  flex gap-1 sm:text-sm md:text-md lg:pt-8 lg:text-lg">
          <p>GALLERY</p>
          <i class="ri-arrow-right-double-line"></i>
          <p>DECORATION</p>
          <i class="ri-arrow-right-double-line"></i>
          <p>MORDERN CHAIR</p>
        </div>
      </div>
    </div>

    <div className='pt-20'>
      <div className="header ">
        <h1>We<span className=""> Have</span></h1>

      </div>
      <div className="pt-10 sm:pt-16 sm:px-6 md:px-[2em] lg:px-[3em] lg:pt-20">
        <div class="grid grid-cols-2 gap-3 px-2 pb-3 md:gap-6 md:pb-6 xl:gap-5">
        
          <div className="relative justify-center items-center">
            <span className=" have-span ">
              LIGHTS
            </span>
            <img src={lamp_img1} className="w-full" />
          </div>
          <div className=" col-span-1">

            <span className="have-span">
              FURNITURE
            </span>
            <img src={sofa1} className="w-full" />
          

          </div>
        </div>
        <div class="grid grid-cols-2  gap-3 px-2 md:gap-6 xl:gap-5">

          <div className="relative  flex justify-center items-center">
            <span className="have-span">
              CHAIR
            </span>
            <img src={chair1} className="w-full" />
          </div>
       

          <div className="relative flex justify-center items-center">
            <span className=" have-span">
              SHELF
            </span>
            <img src={shelf1} className="w-full" />
          </div>
        
          <div className="relative col-span-2 flex justify-center items-center">
            <span className="have-span ">
              OUTDOOR DESIGN
            </span>
            <img src={table1} className="w-full h-44 md:h-72 lg:h-96 "/>
          </div>
        </div>
      </div>

    </div>



  </div>
);

export default Gallery_Section;