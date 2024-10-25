import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Products from './Products';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowUp, faArrowDown, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const ProductCardsSlider = () => {
  const { productsData } = useContext(ShopContext);


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={className}
        style={{ ...style, display: "inline-flex", alignItems: "center", background: "var(--primary-color)", padding: "20px", width: "20px", height: "20px", borderRadius: "100px" }}
      >
        <FontAwesomeIcon icon={faArrowRight} size="x" color="#fff" />
      </div>

    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={className}
        style={{ ...style, marginRight: "-10px", display: "inline-flex", alignItems: "center", background: "var(--primary-color)", padding: "20px", width: "20px", height: "20px", borderRadius: "100px" }}
      >
        <FontAwesomeIcon icon={faArrowLeft} size="x" color="#fff" />
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <section className='products-cards'>
      <div className='container mx-auto px-4 relative'>
        {/* <div className="slider-container"> */}
          <Slider {...settings}>
            {productsData?.map((product, i) => {
              return (
                <div className='products-card' key={i}>
                  <img src={product?.imageUrl} alt="product-img" width="90%" height="80%" />
                  <h2 className='Desktop-H6'>{product?.name}</h2>
                  <p className='text-tiny-normal'>{product?.category}</p>
                  <p className='text-regular-bold'>${product?.price}</p>
                </div>
              )
            })}

          </Slider>
        {/* </div> */}


      </div>
    </section>
  )
}

export default ProductCardsSlider
