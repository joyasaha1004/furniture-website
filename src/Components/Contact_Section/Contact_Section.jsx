import React from 'react';
 import contact_bg from "../Assets/contact-bg.png"
 import "./Contact_Section.css"

const Contact_Section = () => {
    return (
        <div className="w-[300px] pt-10 pb-20 overflow-x-hidden dark:bg-gray-900 sm:w-[600px]
        md:w-[1010px] lg:w-[1270px] xl:w-[1510px] sm:pb-24 md:pb-28  xl:pb-32 ">


            <div>
            <div className="">
            <img src={contact_bg} className=" w-full h-[455px]  md:h-[650px] lg:h-[790px] xl:h-[880px]"></img>
</div>

<div className="text-center relative -top-[280px] text-sm sm:-top-[280px] md:text-lg md:-top-[380px] lg:text-2xl lg:-top-[450px] xl:-top-[510px]">
                    <h1 className="text-3xl  px-3 text-sky-500 font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Get in Touch with Us</h1>
                    <p className=" text-white px-2 mt-4 leading-relaxed sm:px-16 md:px-48 md:mt-6 lg:px-60 xl:px-72"> Explore our collection of hand-picked furniture, crafted with precision and passion to elevate your home.</p>
</div>


<div className=" px-2 sm:px-12 md:px-32 lg:px-44 xl:px-60">
<div className=" relative text-center w-full h-[400px] bg-white px-2 -top-5 pt-5 drop-shadow-2xl sm:px-8 md:py-8 md:h-[500px] lg:h-[600px] xl:h-[700px] ">
<div className="header dark:text-black ">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl xl:mt-6 xl:text-7xl">Contact<span className=""> Us</span></h1>
                        
                   </div>
    <div className="text-sm mt-8 tracking-wide sm:mt-10 md:text-lg md:mt-16 lg:text-2xl">
        <input type="text" placeholder="Enter Your Name" className="input h-10 lg:py-8"></input>
        <input type="email" placeholder="Enter a valid email address" className="input h-10 lg:py-8"></input>
        <textarea placeholder="Enter your message" className="input h-28"></textarea>
        <button className="bg-sky-800 text-white px-4 rounded-lg py-2 hover:text-sky-800 hover:border-2
      hover:border-sky-800 hover:bg-transparent md:mt-3 lg:px-8 lg:py-4">Submit</button>
    </div>
</div>
            
</div>
</div>


<div className="px-4 mt-12 md:px-16 md:mt-20 lg:mt-28 xl:mt-36">
  <div className=" text-center bg-sky-800 w-full px-4 py-4 text-white text-sm rounded-lg sm:flex  sm:grid grid-cols-3 sm:gap-3 md:text-lg md:py-6 md:gap-10 lg:text-2xl lg:py-8 xl:text-3xl xl:py-10   ">

      <div className="mb-4 md:-ml-16 xl:-ml-20">
          <div className="info">
      <i class="ri-phone-fill"></i>
      <h3>CALL US</h3>
       </div>
      <div className="leading-relaxed">
          <span className="sm:mb-4">54887545</span><br></br>

          <span>24564525</span>
      </div>
      </div>

      <div className="mb-4 sm:-ml-10 md:-ml-20 xl:-ml-28">
          <div className="info">
      <i class="ri-map-pin-line"></i>
      <h3>LOCATION</h3>
      </div> 
      <div>
          <span className="sm:mx-3 leading-relaxed">121 ROCK Street,21 Avenue,New York NY 0015-2156</span>
          
      </div>
      </div>



 <div className="mb-4">
     <div className="info">
 <i class="ri-calendar-schedule-fill"></i>
      <h3>HOURS</h3>
      </div> 
      <div className="leading-relaxed">
          <span>Mon - Fri ___ 11 am - 8 pm, Sat</span><br></br>
          <span>Sun ___ 6 am - 8 pm</span>
      </div>
      </div>
  </div>
        
           </div> 
        </div>
    );
};

export default Contact_Section;