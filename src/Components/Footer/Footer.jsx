import React from 'react';

const Footer = () => {
    return (
        <div className="w-[300px] bg-gray-900  dark:bg-black sm:w-[500px] md:w-[700px] lg:w-[1000px] pb-2 xl:w-[1280px] xl:pb-4 xxl:w-[1510px] overflow-x-hidden">

                 <div className="md:flex">
            <div className="px-3 text-white text-sm py-3 leading-loose sm:px-4 md:text-lg md:py-7 md:px-6 lg:text-xl xl:text-2xl lg:px-10">
            <div className="">

            <h1 className="text-2xl text-sky-500 font-serif font-bold tracking-wider sm:text-3xl sm:mb-2 md:text-4xl lg:text-5xl">Livin</h1>
            <p className="w-72 md:w-[400px] md:mt-2 lg:w-[450px] xl:w-[600px] xl:mt-4 
            xl:leading-[40px]">Explore our range to discover furniture that complements your style and elevates your home</p>
            </div>

            <div className="mt-2 md:mt-7 md:mb-2 ">
            <i class="ri-phone-line mr-2 md:mr-4"></i>
                <span>+9449765656</span>
            </div>

            <div className="xl:mt-4">
            <i class="ri-mail-line mr-2 md:mr-4 "></i>
            <span>joyasaha440@gmail.com</span>
            </div>
            </div>
   <div className="sm:ml-60 md:mt-5 md:-ml-24 lg:ml-8 xl:mt-10 xl:ml-20 xxl:ml-64">
            <div className="px-12 flex mt-2 sm:h-7 sm:-mt-6 md:h-9 md:mt-44 xl:h-12">
                <input type="text" className="text-xs w-48 px-8 sm:w-52 md:w-72 md:text-base lg:text-lg lg:w-80 xl:w-96 xl:text-xl " placeholder="Search"></input>
                <i class="ri-search-line  text-white bg-black px-2 -ml-8 md:text-lg md:py-1 md:-ml-[34px] lg:text-xl  dark:bg-gray-800 lg:-ml-[36px] xl:text-2xl xl:px-3 xl:-ml-[48px] xl:py-2"></i>
            </div>

            <div className="text-xl gap-1 flex pt-2 text-white px-28 mb-2 md:text-3xl md:gap-3 md:px-32 lg:text-4xl lg:pt-4 xl:px-40">
                <i class="ri-facebook-circle-line"></i>
                <i class="ri-twitter-line"></i>
                <i class="ri-telegram-line"></i>
                </div></div>
</div>
                <hr></hr>
                <span className="text-[10px] relative mb-2 mx-12 text-gray-400 sm:text-[11px] sm:mb-4 sm:ml-36 md:text-[12px] md:mb-8 md:ml-56 md:top-1 xl:top-2 lg:text-[16px] lg:ml-[340px] xl:text-[19px] xl:ml-[450px]  xxl:text-[20px] xxl:ml-[540px] 
                   ">Copyright @joya saha 2020.All right reserved</span>
        </div>
    );
};

export default Footer;