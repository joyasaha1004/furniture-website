import React from 'react';

const Footer = () => {
    return (
        <div className=" bg-gray-900  dark:bg-black w-full overflow-x-hidden">

                 <div className="lg:grid grid-cols-2">
            <div className="px-3 text-white text-xs py-3 leading-loose sm:px-4 md:text-lg md:py-7 md:px-6 lg:text-xl xl:text-2xl lg:px-10">
            <div className="leading-loose">

            <h1 className="text-xl text-sky-500 font-serif font-bold tracking-wider sm:mb-2 md:text-4xl lg:text-5xl">Livin</h1>
            <p className=" md:mt-2 xl:mt-4">Explore our range to discover furniture that complements your style and elevates your home</p>
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
   <div className="lg:self-center">
            <div className="justify-center flex mt-2 sm:h-7 md:h-8  lg:h-10">
                <input type="text" className="text-xs px-4 text-center md:text-base lg:text-lg lg:w-72 xl:text-xl " placeholder="Search"></input>
                <i class="ri-search-line text-white bg-black px-2 sm:py-0.5 md:py-1 self-center  dark:bg-gray-800 lg:py-1.5 xl:px-3 xl:py-2"></i>
            </div>

            <div className="text-xl gap-1 justify-center flex pt-2 text-white mb-2 md:text-3xl md:gap-3  lg:text-4xl lg:pt-4 ">
                <i class="ri-facebook-circle-line"></i>
                <i class="ri-twitter-line"></i>
                <i class="ri-telegram-line"></i>
                </div></div>
</div>
                <hr></hr>
                <div className='justify-self-center '>
                <span className=" relative text-[10px] mb-1 text-center text-gray-400 sm:mb-4  md:mb-8 lg:text-sm xl:text-md lg:mt-2">Copyright @joya saha 2020.All right reserved</span>
        </div></div>
    );
};

export default Footer;