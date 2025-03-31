import React from 'react';

 
 import "./Contact_Section.css"

const Contact_Section = () => {
    return (
        <div className="pb-20 overflow-x-hidden dark:bg-gray-900 ">


            <div>
         
<div className="bg-contact_bg bg-center bg-cover h-fit text-center relative pt-24 text-xs sm:pt-28 md:pt-28 lg:text-lg lg:pt-36 pb-28 sm:pb-36  md:pb-32 lg:pb-40 xl:pt-60 xl:pb-60">
                    <h1 className="text-2xl leading-snug  px-5 text-sky-500 font-bold sm:text-4xl lg:text-5xl xl:text-6xl px-3 text-sky-500 font-bold ">Get in Touch with Us</h1>
                    <p className=" text-white px-2 mt-4 leading-relaxed sm:px-8 md:px-10  lg:px-24 xl:px-28"> Explore our collection of hand-picked furniture, crafted with precision and passion to elevate your home.</p>

</div>


<div className="pt-12 px-2 sm:px-6 md:px-20 lg:px-24 ">
<div className=" relative text-center w-full bg-white rounded-md px-2 py-6 drop-shadow-2xl sm:px-8 md:py-8 ">
<div className="header dark:text-black ">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">Contact<span className=""> Us</span></h1>
                        
                   </div>
    <div className="text-xs mt-8 tracking-wide sm:mt-10 lg:text-lg md:mt-16 ">
        <input type="text" placeholder="Enter Your Name" className="input h-10 lg:py-8"></input>
        <input type="email" placeholder="Enter a valid email address" className="input h-10 lg:py-8"></input>
        <textarea placeholder="Enter your message" className="input h-28"></textarea>
        <button className="bg-sky-800 text-white px-4 sm:mt-4 rounded-lg py-2 hover:text-sky-800 hover:border-2
      hover:border-sky-800 hover:bg-transparent md:mt-3 lg:px-8 lg:py-4">Submit</button>
    </div>
</div>
            
</div>
</div>


<div className="px-4 mt-16 sm:px-2 md:mt-20  lg:mt-28 lg:px-4 xl:mt-36 xxl:px-6">
  <div className=" text-center bg-sky-800 w-full px-4 py-4 text-white text-xs rounded-lg  md:flex md:grid grid-cols-3 md:py-6  md:gap-8  lg:text-xl lg:py-8 xl:text-2xl xl:py-10">

      <div className="mb-6 md:justify-sel-start">
          <div className="info">
      <i class="ri-phone-fill"></i>
      <h3>CALL US</h3>
       </div>
      <div className="leading-relaxed">
          <span className="sm:mb-4">54887545</span><br></br>

          <span>24564525</span>
      </div>
      </div>

      <div className="mb-6  sm:mx-2 md:mx-5 lg:px-7 xl:px-5 xxl:px-20">
          <div className="info">
      <i class="ri-map-pin-line"></i>
      <h3>LOCATION</h3>
      </div> 
      <div>
          <span className=" leading-relaxed ">121 ROCK Street,21 Avenue,New York NY 0015-2156</span>
          
      </div>
      </div>



 <div className="mb-6  md:justify-items-center xl:col-span-1">
     <div className="info ">
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