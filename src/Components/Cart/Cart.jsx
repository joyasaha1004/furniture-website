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
  para:"Great craftsmanship and modern design. Our new sofa has transformed the entire space!"
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
            breakpoint: 699,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
             
               
            }
          },
          {
            breakpoint: 299,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1, 
              
            }
          }
        ]
      };



  return (
    <div className="w-[300px] -mt-40 pb-60 overflow-x-hidden dark:bg-gray-900 sm:w-[500px]
    md:w-[700px] lg:w-[1000px] xl:w-[1280px] xxl:w-[1510px] sm:pb-64 md:pb-[350px] md:-mt-32 lg:-mt-12 xl:pb-[400px]">

      <div className="lg:grid grid-cols-2  md:px-4 xl:gap-10">

        <div>
      <div className="main-slider px-4 relative  mt-8 sm:px-10 md:px-16 lg:px-5">
        <Slider {...mainSliderSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} style={{ width: "100%" }} className="w-full md:h-[400px] lg:h-[500px] xl:h-[600px]"/>
            </div>
          ))}
        </Slider>
      </div>

      <div className="thumbnail-slider relative right-3 mt-4 px-10 sm:px-28 md:px-44 lg:px-24">
        <Slider {...thumbSliderSettings} className="">
          {images.map((image, index) => (
            <div key={index} className="">
              <img src={image} alt={`Thumbnail ${index + 1}`} className="" />
            </div>
          ))}
        </Slider>
      </div>
</div>
      <div className="px-3 mt-6 dark:text-white sm:mt-8 sm:px-6 md:mt-10">

        <div>
          <h3 className="text-2xl font-bold mb-3 sm:text-3xl md:text-4xl md:mb-5 lg:text-5xl xl:mb-8 xl:text-6xl">Meryi Lounge Chair</h3>
          <span className="text-base text-sky-800 md:text-xl lg:text-2xl xl:text-3xl ">$87.96</span>
          <div className="star-div">
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-s-fill"></i>
          <i class="ri-star-half-fill"></i>
          </div>
        </div>

    <div className="mt-4 text-sm md:text-lg lg:text-2xl lg:mt-6 xl:text-3xl">
      <p className="leading-loose">Livin Modern Fabric Large Lazy Chair, Accent Oversized Comfy Reading Chair, Thick Padded Cozy Lounge Chair with Armrest, Steel Frame Leisure Sofa Chair for Living Room, Bedroom, Dorm, Black</p>

      <div className="btn gap-2 mt-8 grid lg:mt-12">
        <button className="bg-sky-800 text-white ">Add To Cart</button>
        <button className="text-sky-800 border-2 border-sky-800 ">Buy Now</button>
      </div>
    </div>
</div>
      </div>


      {/* customer review */}

    <div className="relative top-32 lg:top-48">
      <div>
      <div className="header ">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Customer<span className=""> Review</span></h1>
 </div>
 <div className="mt-20 text-black md:mt-28">
   <Slider ref={slider => {
          sliderRef = slider;
        }}
        {...settings} className="mx-10 sm:gap-20">
     {CustomerList.map((data)=>(

       <div className="px-4 py-4 bg-gray-600 drop-shadow-lg h-64 text-sm rounded-lg md:text-lg md:h-[280px] lg:text-xl lg:h-80 xl:text-2xl xl:h-[400px] xl:px-6">
         
         
           <img src={data.img} alt="" className="w-12 h-12 rounded-full lg:w-16 lg:h-16 xl:w-20 xl:h-20"/>
     
         <div className="mt-6 text-white xl:mt-8">
     <p className="leading-relaxed xl:leading-loose">"{data.para}"</p>

     <div className="absolute bottom-2 left-3 text-sky-800 font-bold">
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