import React,{ Component } from 'react';
import "./Product.css"

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useRef,useState} from "react"
import lamp1 from "../Assets/lamp1.png"
import lamp2 from "../Assets/lamp2.png"
import lamp3 from "../Assets/lamp3.png"
import lamp4 from "../Assets/lamp4.png"
import lamp5 from "../Assets/lamp5.png"
import lamp6 from "../Assets/lamp6.png"
import lamp7 from "../Assets/lamp7.png"
import lamp8 from "../Assets/lamp8.png"
import lamp9 from "../Assets/lamp9.png"
import lamp10 from "../Assets/lamp10.png"
import sofa from "../Assets/sofa-img1.png";
import decor1 from "../Assets/decor1.png";
import decor2 from "../Assets/decor2.png"
import decor3 from "../Assets/decor3.png"
import decor4 from "../Assets/decor4.png"
import decor5 from "../Assets/decor5.png"
import decor6 from "../Assets/decor6.png"
import decor7 from "../Assets/decor7.png"
import decor8 from "../Assets/decor8.png"
import decor9 from "../Assets/decor9.png"
import decor10 from "../Assets/decor10.png"
import chair1 from "../Assets/chair1.png"
import chair2 from "../Assets/chair2.png"
import chair3 from "../Assets/chair3.png"
import chair4 from "../Assets/chair4.png"
import chair5 from "../Assets/chair5.png"
import chair6 from "../Assets/chair6.png"
import chair7 from "../Assets/chair7.png"
import chair8 from "../Assets/chair8.png"
import chair9 from "../Assets/chair9.png"
import chair10 from "../Assets/chair10.png"
import sofa1 from "../Assets/sofa1.png"
import sofa2 from "../Assets/sofa2.png"
import sofa3 from "../Assets/sofa3.png"
import sofa4 from "../Assets/sofa4.png"
import sofa5 from "../Assets/sofa5.png"
import sofa6 from "../Assets/sofa6.png"
import sofa7 from "../Assets/sofa7.png"
import sofa8 from "../Assets/sofa8.png"
import sofa9 from "../Assets/sofa9.png"
import sofa10 from "../Assets/sofa10.png"
import shelf1 from  "../Assets/shelf1.png"
import shelf2 from "../Assets/shelf2.png"
import shelf3 from "../Assets/shelf3.png"
import shelf4 from "../Assets/shelf4.png"
import shelf5 from "../Assets/shelf5.png"
import shelf6 from "../Assets/shelf6.png"
import shelf7 from "../Assets/shelf7.png"
import shelf8 from "../Assets/shelf8.png"
import shelf9 from "../Assets/shelf9.png"
import shelf10 from "../Assets/shelf10.png"
import table1 from  "../Assets/table1.png"
import table2 from "../Assets/table2.png"
import table3 from "../Assets/table3.png"
import table4 from "../Assets/table4.png"
import table5 from "../Assets/table5.png"
import table6 from "../Assets/table6.png"
import table7 from "../Assets/table7.png"
import table8 from "../Assets/table8.png"
import table9 from "../Assets/table9.png"
import table10 from "../Assets/table10.png"
import { NavLink } from 'react-router-dom';
const LampList=[{

    img:lamp1,
    name:"ONEWISH Touch Bedside Lamp" ,
    price:"$ 245.00",
},
{

    img:lamp2,
    name:"ONEWISH Touch Bedside Lamp" ,
    price:"$ 225.00",
},
{

    img:lamp3,
    name:"Ambimall 60' Floor Lamp for Living Room " ,
    price:"$ 285.00",
},
{

    img:lamp4,
    name:"Table Lamp for Bedroom" ,
    price:"$ 205.00",
},
{

    img:lamp5,
    name:"Ambimall 60' Floor Lamp for Living Room" ,
    price:"$ 245.00",
},
{

    img:lamp6,
    name:"Dimunt LED Floor Lamp" ,
    price:"$ 285.00",
},
{

    img:lamp7,
    name:"LEPOWER Wood Floor Lamp" ,
    price:"$ 240.00",
},
{

    img:lamp8,
    name:"Small Lamp for Bedroom" ,
    price:"$ 255.00",
},
{

    img:lamp9,
    name:"Designer Ceiling Light" ,
    price:"$ 225.00",
},
{

    img:lamp10,
    name:"Designer Table Desk Lamp" ,
    price:"$ 275.00",
}]

const ChairList=[
  {
    img:chair1,
    name:"Armen Living Summer Mid Centure",
    price:"$ 114.00",
},
{
  img:chair2,
  name:"Armen Living Summer Mid Centure",
  price:"$ 114.00",
},
{
  img:chair3,
  name:"Armen Living Summer Mid Centure",
  price:"$ 114.00",
},
{
  img:chair4,
  name:"Armen Living Summer Mid Centure",
  price:"$ 114.00",
},
{
  img:chair5,
  name:"Armen Living Summer Mid Centure",
  price:"$ 114.00",
},
{
  img:chair6,
  name:"Armen Living Summer Mid Centure",
  price:"$ 114.00",
},
{
  img:chair7,
  name:"Armen Living Summer Mid Centure",
  price:"$ 37.96",
},
{
  img:chair8,
  name:"Armen Living Summer Mid Centure",
  price:"$ 37.96",
},
{
  img:chair9,
  name:"Armen Living Summer Mid Centure",
  price:"$ 37.96",
},
{
  img:chair10,
  name:"Armen Living Summer Mid Centure",
  price:"$ 37.96",
}
]
const DecorList =[{
  img:decor1,
  name:"Kate and Laurel ciel Glam ",
  price:"$ 44.56",
},
{
  img:decor2,
name:"Kate and Laurel ciel Glam ",
price:"$ 44.56",
},
{
  img:decor3,
  name:"Kate and Laurel ciel Glam ",
  price:"$ 44.56",
  },
  {
    img:decor4,
    name:"Kate and Laurel ciel Glam ",
    price:"$ 44.56",
    },
    {
      img:decor5,
      name:"Kate and Laurel ciel Glam ",
      price:"$ 44.56",
      },
      {
        img:decor6,
        name:"Kate and Laurel ciel Glam ",
        price:"$ 44.56",
        },
        {
          img:decor7,
          name:"Kate and Laurel ciel Glam ",
          price:"$ 44.56",
          },
          {
            img:decor8,
            name:"Kate and Laurel ciel Glam ",
            price:"$ 44.56",
            },
            {
              img:decor9,
              name:"Kate and Laurel ciel Glam ",
              price:"$ 44.56",
              },
              {
                img:decor10,
                name:"Kate and Laurel ciel Glam ",
                price:"$ 44.56",
                },]
                                               
const SofaList=[{
  img:sofa1,
  name:"Inflatable Pull-Out Sofa",
  price:"$ 80.48"
},
{
  img:sofa2,
  name:"Inflatable Pull-Out Sofa",
  price:"$ 80.48"
},
{
  img:sofa3,
  name:"Inflatable Pull-Out Sofa",
  price:"$ 80.48"
},
{
  img:sofa4,
  name:"Inflatable Pull-Out Sofa",
  price:"$ 80.48"
},
{
  img:sofa5,
  name:"Inflatable Pull-Out Sofa",
  price:"$ 80.48"
},
{
  img:sofa6,
  name:"Inflatable Pull-Out Sofa",
  price:"$ 80.48"
},
{
  img:sofa7,
  name:"Inflatable Pull-Out Sofa",
  price:"$ 80.48"
},
{
  img:sofa8,
  name:"Inflatable Pull-Out Sofa",
  price:"$ 80.48"
},
{
  img:sofa9,
  name:"Inflatable Pull-Out Sofa",
  price:"$ 80.48"
},
{
  img:sofa10,
  name:"Inflatable Pull-Out Sofa",
  price:"$ 80.48"
},

]
const ShelfList =[{

  img:shelf1,
  name:"Humble crew, 4 tier Natural kids Book Self",
  price:"$ 38.65"
},
{

  img:shelf2,
  name:"Humble crew, 4 tier Natural kids Book Self",
  price:"$ 38.65"
},
{

  img:shelf3,
  name:"Humble crew, 4 tier Natural kids Book Self",
  price:"$ 38.65"
},
{

  img:shelf4,
  name:"Humble crew, 4 tier Natural kids Book Self",
  price:"$ 38.65"
},
{

  img:shelf5,
  name:"Humble crew, 4 tier Natural kids Book Self",
  price:"$ 38.65"
},
{

  img:shelf6,
  name:"Humble crew, 4 tier Natural kids Book Self",
  price:"$ 38.65"
},
{

  img:shelf7,
  name:"Humble crew, 4 tier Natural kids Book Self",
  price:"$ 38.65"
},
{

  img:shelf8,
  name:"Humble crew, 4 tier Natural kids Book Self",
  price:"$ 38.65"
},
{

  img:shelf9,
  name:"Humble crew, 4 tier Natural kids Book Self",
  price:"$ 38.65"
},
{

  img:shelf10,
  name:"Humble crew, 4 tier Natural kids Book Self",
  price:"$ 38.65"
},
]
const TableList=[{

  img:table1,
  name:"VECELO Square Dining Room Table",
  price:"$ 76.25",
},
{

  img:table2,
  name:"VECELO Square Dining Room Table",
  price:"$ 76.25",
},
{

  img:table3,
  name:"VECELO Square Dining Room Table",
  price:"$ 76.25",
},
{

  img:table4,
  name:"VECELO Square Dining Room Table",
  price:"$ 76.25",
},
{

  img:table5,
  name:"VECELO Square Dining Room Table",
  price:"$ 76.25",
},
{

  img:table6,
  name:"VECELO Square Dining Room Table",
  price:"$ 76.25",
},
{

  img:table7,
  name:"VECELO Square Dining Room Table",
  price:"$ 76.25",
},
{

  img:table8,
  name:"VECELO Square Dining Room Table",
  price:"$ 76.25",
},
{

  img:table9,
  name:"VECELO Square Dining Room Table",
  price:"$ 76.25",
},
{

  img:table10,
  name:"VECELO Square Dining Room Table",
  price:"$ 76.25",
},

]

const Product = () => {

 


    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef(null);

    const setter = {
      dots: true,
      infinite: true,
      arrow:false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: current => setActiveSlide(current),
      appendDots: dot => (
        <div>
         <ul >{dot} </ul>
        </div>
         ), 
     
       customPaging: i => (
        
      <div style={{width:"30px",color:"orange",}}></div>
       
         ) 
    };
  
    const handleListItemClick = index => {
      setActiveSlide(index);
      sliderRef.current.slickGoTo(index);
  } 

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow`}
        style={{ 
          ...style, 
        
        }}
        onClick={onClick} >
     
      </div>
    );
  };
  
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
      className={`${className} customprev-arrow`}
        style={{ 
          ...style, 
        //   display: "block", 
        //  color:"blue", 
        //  background:"gray",   // Set arrow color
        //   borderRadius: "50%",   // Make it round
        //   left: "10px", 
        //   fontSize:"20px",
        //   top:"150px" ,       // Adjust position
        //   zIndex: 1 , // Ensure it's visible over the slides
        }}
        onClick={onClick}
      >
      
      </div>
    );
  };

    const settings = {
         className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "25px",
        //slidesToShow: 1 ,
        speed: 500,
        arrow:true,
        nextArrow: <CustomNextArrow  />,
         prevArrow: <CustomPrevArrow />,
        responsive: [
          {
            breakpoint: 1670,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
                 //centerPadding: "20px",
            }
          },

         
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
                 centerPadding: "0px",
            }
          },
        
         
          // {
          //   breakpoint: 1009,
          //   settings: {
          //     slidesToShow: 3,
          //     slidesToScroll: 1,
          //     //  centerPadding: "60px",
          //   }
          // },
          {
            breakpoint: 999,
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

    }
     
    return (
        <div className="w-[300px] font-sans dark:bg-gray-900 dark:text-white pb-10 sm:pb-16 sm:w-[500px] sm:-mt-10 md:pb-32 md:w-[700px] lg:w-[1000px] xl:w-[1280px] xxl:w-[1510px] overflow-x-hidden">
             <div>

<div className="header -left-8 sm:-left-32 md:-left-44 lg:-left-[300px] xl:-left-[380px] xxl:-left-[490px]">
<h1>Our<span className=""> Products</span></h1>
</div>

<div className=" relative mt-12 px-4 mb-4  lg:px-7 md:mt-20 lg:-ml-8 xl:px-12 xxl:-ml-12">
       <ul className=" linklist grid grid-cols-2 gap-4 flex-wrap text-center sm:grid-cols-4  xl:grid-cols-5 lg:gap-2 xxl:grid-cols-6">

      

         <li onClick={() => handleListItemClick(0)}>Lamp</li> 
            <li onClick={() => handleListItemClick(1)}>Chair</li>
         <li  onClick={() => handleListItemClick(2)}>Decoration</li>
           <li  onClick={() => handleListItemClick(3)}>Sofa</li> 
          <li  onClick={() => handleListItemClick(4)}>Shelf</li> 
          <li  onClick={() => handleListItemClick(5)}>Mordern Table</li> 
     
       </ul>
      </div>

      <div className="sm:-mt-10 md:mt-10 lg:w-full relative ">
          <Slider {...setter} ref={sliderRef}>
           
               <div className="mt-24  ">
<Slider {...settings} >
  {LampList.map((data)=>(
      

  <div className=" px-8  py-5 hover:transition duration-700 sm:px-6 md:px-10 hover:scale-105 lg:px-20 xl:px-16">
    <img src={data.img} alt=""  className="w-[250px] h-64 sm:w-[300px] md:h-[350px] md:w-[250px] lg:w-[320px] lg:h-[450px] xl:w-[450px] xl:h-[480px]"/>

    <div className=" mt-6 text-center relative xl:-ml-2">
  <h3 className="text-base font-bold md:text-xl md:mb-3 lg:text-2xl ">{data.name}</h3>
  <span className="text-sm text-gray-400 font-bold md:text-base lg:text-xl xl:text-2xl">{data.price}</span>
    </div>


</div>

  ))}
</Slider>
</div>

<div className="mt-24 ">
<Slider {...settings} >
  {ChairList.map((data)=>(
      

  <div className="products  px-8 hover:transition duration-700 sm:px-6 md:px-10 hover:scale-105 lg:px-20 xl:px-16">
    <img src={data.img} alt=""  className="w-[250px] h-64 sm:w-[300px] md:h-[350px] md:w-[250px] lg:w-[320px] lg:h-[450px] xl:w-[480px] xl:h-[480px]"/>

    <div className="mt-6 text-center relative ">
  <h3 className="text-base font-bold md:text-xl md:mb-3 lg:text-3xl ">{data.name}</h3>
  <span className="text-sm text-gray-400 md:text-base lg:text-xl xl:text-2xl">{data.price}</span>
    </div>


</div>

  ))}
</Slider>
</div>

<div className="mt-24 
 ">
<Slider {...settings} >
  {DecorList.map((data)=>(
      

  <div className="products px-8 hover:transition duration-700 sm:px-6 md:px-10 hover:scale-105 lg:px-20 xl:px-16">
    <img src={data.img} alt=""  className=" w-[250px] h-64 sm:w-[300px] md:h-[350px] md:w-[250px] lg:w-[320px] lg:h-[450px] xl:w-[480px] xl:h-[480px]"/>

    <div className="mt-6 text-center relative ">
  <h3 className="text-base font-bold md:text-xl md:mb-3 lg:text-3xl ">{data.name}</h3>
  <span className="text-sm text-gray-400 md:text-base lg:text-xl xl:text-2xl">{data.price}</span>
    </div>


</div>

  ))}
</Slider>
</div>

<div className="mt-24 ">
<Slider {...settings} >
  {SofaList.map((data)=>(
      

  <div className="products px-8 hover:transition duration-700 sm:px-6 md:px-10 hover:scale-105 lg:px-20 xl:px-16">
    <img src={data.img} alt=""  className="w-[250px] h-64 sm:w-[300px] md:h-[350px] md:w-[250px] lg:w-[320px] lg:h-[450px] xl:w-[480px] xl:h-[480px]"/>

    <div className="mt-6 text-center relative ">
  <h3 className="text-base font-bold md:text-xl md:mb-3 lg:text-3xl ">{data.name}</h3>
  <span className="text-sm text-gray-400 md:text-base lg:text-xl xl:text-2xl">{data.price}</span>
    </div>


</div>

  ))}
</Slider>
</div>
<div className="mt-24 
 ">
<Slider {...settings} >
  {ShelfList.map((data)=>(
      

  <div className="products px-8 hover:transition duration-700 sm:px-6 md:px-10 hover:scale-105 lg:px-20 xl:px-16">
    <img src={data.img} alt=""  className="w-[250px] h-64 sm:w-[300px] md:h-[350px] md:w-[250px] lg:w-[320px] lg:h-[450px] xl:w-[480px] xl:h-[480px]"/>

    <div className="mt-6 text-center relative ">
  <h3 className="text-base font-bold md:text-xl md:mb-3 lg:text-3xl ">{data.name}</h3>
  <span className="text-sm text-gray-400 md:text-base lg:text-xl xl:text-2xl">{data.price}</span>
    </div>


</div>

  ))}
</Slider>
</div>

               <div className="mt-24"> 
                
<Slider {...settings} >
  {TableList.map((data)=>(
      

  <div className="products px-8 hover:transition duration-700 sm:px-6 md:px-10 hover:scale-105 lg:px-20 xl:px-20">
    <img src={data.img} alt="" className="w-[250px] h-64 sm:w-[300px] md:h-[350px] md:w-[250px] lg:w-[320px] lg:h-[450px] xl:w-[480px] xl:h-[480px]"/>

    <div className="mt-6 text-center relative lg:mt-8">
  <h3 className="text-base font-bold md:text-xl md:mb-3 lg:text-3xl ">{data.name}</h3>
  <span className="text-sm text-gray-400 md:text-base lg:text-xl xl:text-2xl">{data.price}</span>
    </div>


</div>

  ))}
</Slider>
</div>

              </Slider>
      </div>

</div>
        </div>
    );
};

export default Product;