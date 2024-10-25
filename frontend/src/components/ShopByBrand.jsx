//  import React from 'react'
//  import Slider from "react-slick"

// const ShopByBrand = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ShopByBrand;

import React from "react";
import Slider from "react-slick";
import adidas from "../assets/adidas.png";


const ShopByBrand = () => {
    const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <section className=''>
        <div className='container mx-auto px-4'>
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={adidas}  alt="" />
        </div>
        <div>
          <img src={adidas}  alt="" />
        </div>
        <div>
          <img src={adidas}  alt="" />
        </div>
        <div>
          <img src={adidas}  alt="" />
        </div>
        <div>
          <img src={adidas}  alt="" />
        </div>
        <div>
          <img src={adidas}  alt="" />
        </div>
        <div>
          <img src={adidas}  alt="" />
        </div>
        <div>
          <img src={adidas}  alt="" />
        </div>
        <div>
          <img src={adidas}  alt="" />
        </div>
        <div>
          <img src={adidas}  alt="" />
        </div>
        <div>
          <img src={adidas}  alt="" />
        </div>
        <div>
          <img src={adidas}  alt="" />
        </div>
      </Slider>
    </div>
    </div>
    </section>
  );
}

export default ShopByBrand;


