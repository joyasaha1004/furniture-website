import React, { useState,useRef } from "react";
import Slider from "react-slick";
import "./Cart.css"

import shop_chair01 from "../Assets/sofa-img1.png";
import shop_chair02 from "../Assets/shop-chair2.png";
import shop_chair03 from "../Assets/shop-chair3.png";
import shop_chair04 from "../Assets/shop-chair4.png";
import customer1 from "../Assets/customer1.png"
import customer2 from "../Assets/customer2.png"
import customer3 from "../Assets/customer3.png"
import customer4 from "../Assets/customer4.png"
import customer5 from "../Assets/customer5.png"
import customer6 from "../Assets/customer6.png"


const CustomerList=[{

  img:customer1,
  name:"Evan Rachil",
  para:"Absolutely love the quality! Stylish, comfortable, and fits perfectly in our living room."
},
{

  img:customer2,
  name:"Lous Haffman",
  para:"Great crafts manship and modern design. Our new sofa has transformed the entire space!"
},
{

  img:customer3,
  name:"Binis Archal",
  para:"Exceptional service and beautiful furniture! Adds a touch of elegance to our home."
},
{

  img:customer4,
  name:"Elina Marchis",
  para:"So comfortable and durable. Worth every penny – highly recommend!"
},
{

  img:customer5,
  name:"Rajex Terib",
  para:"Perfect balance of style and comfort. Our guests always compliment the new look!"
},
{

  img:customer6,
  name:"Alice Marient",
  para:"Affordable luxury! The table is sturdy, and the design complements our decor beautifully."
},


]


 function Cart() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const mainSliderSettings = {
    asNavFor: nav2,
    ref: (slider) => setNav1(slider),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };


  const thumbSliderSettings = {
    asNavFor: nav1,
    ref: (slider) => setNav2(slider),
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode:false,
    centerPadding: "130px",
    initialSlide: 0,
    dots: false,
    infinite: false,
    arrows: false,
   }
  const images = [shop_chair01, shop_chair02, shop_chair03, shop_chair04];

  //customer review

 
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  }
  const previous = () => {
    sliderRef.slickPrev();
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "", backgroundColor: "black",overflow:"hidden",width:"20px",height:"20px",borderRadius:"50%" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,  display: "", backgroundColor: "black",overflow:"hidden",width:"20px",height:"20px",borderRadius:"50%" }}
        onClick={onClick}
      />
    );
  }
  

    var settings = {
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        arrow:true,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [

        
          {
            breakpoint: 1509,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
                centerPadding: "40px",
            }
          },
          {
            breakpoint: 999,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
          
            }
          },
          {
            breakpoint: 499,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1, 
             
            }
          }
        ]
      };



  return (
    <div className="pb-16 pt-8 overflow-x-hidden dark:bg-gray-900 max-w-screen-xl mx-auto  xl:pt-20 xl:pb-24">

      <div className="lg:grid grid-cols-2 sm:gap-4 md:px-4">

        <div>
      <div className="main-slider px-4 relative  mt-8 sm:px-10 md:px-16 lg:px-5 ">
        <Slider {...mainSliderSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} style={{ width: "100%" }} className="w-full xl:h-[33em]"/>
            </div>
          ))}
        </Slider>
      </div>

      <div className="thumbnail-slider relative right-3 mt-4 px-10 sm:px-16 md:px-20 lg:px-20 xl:px-24 xxl:px-32 ">
        <Slider {...thumbSliderSettings} className="">
          {images.map((image, index) => (
            <div key={index} className="">
              <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full" />
            </div>
          ))}
        </Slider>
      </div>
</div>
      <div className="px-3 mt-6 dark:text-white xl:items-center">

        <div>
          <h3 className="text-2xl font-bold mb-3 md:mb-5 md:text-3xl xl:mb-8 lg:text-4xl xl:text-5xl">Meryi Lounge Chair</h3>
          <span className="text-base text-sky-800 md:text-lg xl:text-2xl">$87.96</span>
          <div className="star-div">
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-half-fill"></i>
          </div>
        </div>

    <div className="mt-4 text-xs lg:mt-6 md:text-sm lg:text-base xl:text-lg xxl:text-xl">
      <p className="leading-loose">Livin Modern Fabric Large Lazy Chair, Accent Oversized Comfy Reading Chair, Thick Padded Cozy Lounge Chair with Armrest, Steel Frame Leisure Sofa Chair for Living Room, Bedroom, Dorm, Black</p>

      <div className="btn gap-2 mt-8 grid lg:mt-12">
        <button className="bg-sky-800 text-white ">Add To Cart</button>
        <button className="text-sky-800 border-2 border-sky-800 ">Buy Now</button>
      </div>
    </div>
</div>
      </div>


      {/* customer review */}

    <div className="relative mt-24 lg:mt-32">
      <div>
      <div className="header ">
                    <h1 className="">Customer<span className=""> Review</span></h1>
 </div>
 <div className="mt-10 text-black sm:mt-16 md:mt-28 lg:mt-20">
   <Slider ref={slider => {
          sliderRef = slider;
        }}
        {...settings} className="mx-12 sm:mx-[5em]">
     {CustomerList.map((data)=>(

       <div className="px-4 py-4 bg-gray-600 drop-shadow-lg  text-xs sm:px-3 sm:h-60 rounded-lg  md:text-sm md:px-5 md:h-64 lg:text-base lg:h-80 xl:text-lg xl:h-[19.5em] xxl:text-xl">
         
         
           <img src={data.img} alt="" className="w-10 h-10 rounded-full lg:w-16 lg:h-16 xl:w-20 xl:h-20"/>
     
         <div className="mt-6 text-white lg:mt-8">
     <p className="leading-relaxed xl:leading-loose">"{data.para}"</p>

     <div className="pt-6 sm:pt-8 text-sky-800 font-bold sm:absolute sm:bottom-0 sm:mb-2 
     ">
       <span>{data.name}</span>

       <div className="star-div">
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-half-fill"></i>
          </div>
     </div>
         </div>
     
          </div>
     ))}

     

    
   </Slider>
   
   </div>     
                  
      </div>
    </div>
    
    </div>
  );
}


export default Cart;