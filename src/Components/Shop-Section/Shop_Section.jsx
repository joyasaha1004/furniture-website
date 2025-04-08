import React from 'react';
import shop_bg from "../Assets/shop_bg.png"
import shop_bg2 from "../Assets/shop_bg2.png"

const Shop_Section = () => {
    return (
        <div className=" font-sans w-full dark:bg-gray-900 dark:text-white pb-7 sm:pb-9  overflow-x-hidden max-w-screen-xl mx-auto ">

        <div>


<div className="text-center relative bg-shop_bg pt-24 pb-7 sm:pb-10 md:pb-24 lg:pb-36 bg-cover bg-center text-xs md:pt-28 lg:text-base lg:pt-44 xl:pt-52 xl:text-lg xxl:text-xl">
                    <h1 className="text-2xl leading-snug  px-5 text-sky-500 font-bold sm:text-4xl  lg:text-5xl xl:leading-normal xl:text-6xl"> Shop Our Curated Furniture Collection</h1>
                    <p className="text-white px-2 mt-2 leading-relaxed sm:px-8 md:px-12  lg:px-16 lg:mt-4 "> Discover stylish, quality furniture crafted to elevate any room. Shop our collection to find the perfect pieces that blend comfort, elegance, and timeless design for your space.</p>
                    <button className="bg-transparent text-sky-800 border-2 border-sky-800 mt-6 px-4 py-2  font-bold hover:bg-sky-800 hover:text-white  md:px-6 lg:mt-10 xl:py-3 xl:px-8">Contact</button>
            </div>


</div>
        </div>
    );
};

export default Shop_Section;