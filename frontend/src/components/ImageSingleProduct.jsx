import React, { useState } from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowUp, faArrowDown, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const ImageSingleProduct = ({ images }) => {
    const [activeImage, setActiveImage] = useState(0);
    // console.log(activeImage)

    const hasImages = images && images.length > 0;
    const currentImage = hasImages ? images[activeImage] : '';


    
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
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
    };
    return (
        <>
        <div>
            <div className="main-image">
            <img src={currentImage} alt="Product" />
            </div>
            <Slider {...settings}>
                {images?.map((images, index) => {
                    // console.log(images,index)
                    return (
                        <div key={index}>
                            <img src={images}
                                width="50%" height="50%"
                                alt={`Thumbnail ${index}`}
                                className={index === activeImage ? 'active-button' : ''}
                                onClick={() => setActiveImage(index)} />
                        </div>
                    )
                })}
            </Slider>
        </div>
        {/* ):""} */}
        </>
    )
}

export default ImageSingleProduct



{/* <img src={singleproductData?.imageUrl} alt="" /> */}
