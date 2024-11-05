import React from 'react';
import shop_bg from "../Assets/shop_bg.png"
import shop_bg2 from "../Assets/shop_bg2.png"

const Shop_Section = () => {
    return (
        <div className="w-[300px] font-sans pt-20 dark:bg-gray-900 dark:text-white pb-7 sm:pb-9 sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1280px] xxl:w-[1510px] overflow-x-hidden">

        <div>

            <div className="grid grid-cols-2 flex">
            <div>
            <img src={shop_bg} className="h-[455px]  md:h-[650px] lg:h-[790px] xl:h-[900px]"></img>
</div>
<div>
            <img src={shop_bg2} className="  h-[455px]  md:h-[650px] lg:h-[790px] xl:h-[900px]"></img>
</div>
</div>

<div className="text-center relative -top-[320px] text-sm sm:-top-[320px] md:text-lg md:-top-[420px] lg:text-2xl lg:-top-[500px] xl:-top-[530px]">
                    <h1 className="text-3xl leading-snug px-2 text-sky-500 font-bold sm:text-4xl md:text-5xl md:leading-snug  lg:text-6xl lg:leading-snug xl:text-7xl xl:px-6"> Shop Our Curated Furniture Collection</h1>
                    <p className=" text-white px-4 mt-4 leading-relaxed sm:px-16 md:px-20 md:mt-6 md:leading-loose lg:px-24 xl:px-32"> Discover stylish, quality furniture crafted to elevate any room. Shop our collection to find the perfect pieces that blend comfort, elegance, and timeless design for your space.</p>
                    <button className="bg-transparent text-sky-800 border-2 border-sky-800 mt-6 px-4 py-2 text-xs font-bold hover:bg-sky-800 hover:text-white md:text-base lg:text-xl md:px-6 lg:mt-10 xl:text-2xl xl:py-3 xl:px-8">Contact</button>
            </div>


</div>
        </div>
    );
};

export default Shop_Section;