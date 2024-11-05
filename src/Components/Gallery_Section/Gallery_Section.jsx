import React from 'react';
import "./Gallery_Section.css"

import gallery_bg from "../Assets/gallery_bg.png";
import lamp_img1 from "../Assets/lamp-img1.png";
import decor1 from "../Assets/decor1.png";
import table1 from "../Assets/table4.png"
import sofa1 from "../Assets/sofa2.png"
import chair1 from "../Assets/chair1.png"
import shelf1 from "../Assets/shelf3.png"


const Gallery_Section = () => {

   
    return (
        <div className="w-[300px] font-sans pt-20 dark:bg-gray-900 dark:text-white pb-7 sm:pb-9 sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1280px] overflow-x-hidden xxl:w-[1510px] ">


            <div>
                <div>
                <img src={gallery_bg} className=" w-full h-[455px]  md:h-[550px] lg:h-[790px] xl:h-[980px]"></img>
</div>
                <div className="text-center relative -top-[350px] text-sm sm:-top-[330px] md:text-lg md:-top-[400px] lg:text-2xl lg:-top-[500px] xl:-top-[640px]">
                    <h1 className="text-3xl  px-5 text-sky-500 font-bold sm:text-4xl md:leading-[60px] md:text-5xl lg:text-6xl xl:text-7xl"> Discover Quality You Can Trust</h1>
                    <p className=" text-white px-2 mt-4 leading-relaxed sm:px-16 md:px-20 md:mt-6 lg:px-28 xl:px-72"> Explore our collection of hand-picked furniture, crafted with precision and passion to elevate your home.</p>
                    <button className="bg-transparent text-sky-800 border-2 border-sky-800 mt-6 px-2 py-2 text-xs font-bold hover:bg-sky-800 hover:text-white md:text-base lg:text-lg lg:mt-10 xl:text-xl">SHOP NOW</button>

              <div className="text-gray-400 text-xs pt-10 pl-5 flex gap-1 sm:text-sm sm:pl-24 md:text-lg md:pl-40 lg:text-xl lg:pl-[290px] xl:text-2xl xl:pl-[400px] xxl:pl-[500px]">
                  <p>GALLERY</p>
                  <i class="ri-arrow-right-double-line"></i>
                  <p>DECORATION</p>
                  <i class="ri-arrow-right-double-line"></i>
                  <p>MORDERN CHAIR</p>
              </div>
                </div>
            </div>

            <div className="sm:mt-20">
                <div className="header -top-48 ">
                    <h1>We<span className=""> Have</span></h1>
                        
                   </div>
                   <div className="-mt-36 sm:px-10 md:px-32 md:-mt-20 lg:px-44 xl:px-56">
                   <div class="grid grid-rows-3 grid-flow-col gap-3 px-2 ">
  <div className="row-span-3 ">

      <img src={lamp_img1} alt="" className="h-[300px] sm:h-[400px] sm:w-[250px] md:w-[360px] md:h-[500px] lg:w-[440px] lg:h-[680px] xl:w-[490px] xl:h-[800px]"/>

 <div className="absolute have-span -mt-[102px]  ">
      <span className="">LIGHTS</span>

</div>
  </div>
  <div className="have-img col-span-1">
  <img src={sofa1} alt=""/>
  <div className="absolute have-span -mt-[146px] ml-4 ">
      <span className="">FURNITURE</span>

</div>

  </div>
  <div className="have-img col-span-1 ">
  <img src={decor1} alt=""/>

  <div className="absolute have-span -mt-[56px]">
      <span className="">DECORATION</span>

</div>
  </div>
</div>   

<div class="grid grid-cols-2  gap-3 px-2 relative -top-32 sm:-top-48 lg:-top-80 xl:-top-[380px]">
  <div className="have-img">

      <img src={chair1} alt="" className=""/>
      <div className="absolute have-span -mt-[86px] ml-4 ">
      <span className="">CHAIR</span>

</div>
  </div>
  <div className="have-img col-span-1">
  <img src={shelf1} alt=""/>

  <div className="absolute have-span -mt-[46px] ml-4 ">
      <span className="">SHELF</span>

</div>
  </div>
  <div className=" col-span-2 ">
  <img src={table1} alt="" className="w-full sm:w-[510px] sm:h-52 md:w-[740px] md:h-72 lg:w-[900px] lg:h-96 xl:w-[1030px] xl:h-[440px]"/>

  <div className="absolute have-span -mt-[146px] -ml-3 md:ml-10">
      <span className="">OUTDOOR DESIGN</span>

</div>
  </div>
</div>   
                   </div>
              
            </div>

           
            
        </div>
    );
};

export default Gallery_Section;