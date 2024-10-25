import React, { useContext, useEffect, useState } from 'react'
import ImageSingleProduct from '../components/ImageSingleProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRemove } from '@fortawesome/free-solid-svg-icons'



const ProductFocus = ({ singleproductData, data, currency }) => {
    // accordions
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

    const handleClick1 = () => {
        setOpen1(!open1)
    }
    const handleClick2 = () => {
        setOpen2(!open2)
    }
    const handleClick3 = () => {
        setOpen3(!open3)
    }
    const handleClick4 = () => {
        setOpen4(!open4)
    }

    console.log(data);

    return (
        <div>
            ProductFocus
            <div className='grid grid-cols-12'>
                <div className='md:col-span-6 col-span-12'>
                    <ImageSingleProduct images={singleproductData?.images} />
                </div>


                <div className='md:col-span-6 col-span-12'>
                    <h3 className='title mb-2'>{singleproductData?.name}</h3>
                    <p className='text-tiny-normal product-code mb-2'>Product Code: {singleproductData?.productcode}</p>
                    <hr />
                    <h3 className='price pt-2 pb-2'>{currency}{singleproductData?.price}</h3>
                    <hr />
                    <div className='accordion-1 pb-5 pt-5'>
                        <div className='flex justify-between accordion-head mb-3'
                            onClick={() => handleClick1()}>
                            <p>Choose Size and Quantity</p>
                            <p><b>+</b></p>
                        </div>

                        {open1 &&
                            <div>
                                <button className='green-rounded-button flex gap-5 items-center'>size
                                    <FontAwesomeIcon icon={faRemove} />
                                </button>
                            </div>}
                    </div>
                    <hr />
                    <div className='accordion-2 pb-5 pt-5'>
                        <div className='flex justify-between accordion-head mb-3' onClick={() => handleClick2()}>
                            <p>Choose Color</p>
                            <p><b>+</b></p>
                        </div>
                        {open2 &&
                            <div className='accrdion-body'>
                                <div className='flex gap-1'>

                                    <button className='green-rounded-button flex gap-5 items-center'>color
                                        <FontAwesomeIcon icon={faRemove} />
                                    </button>

                                </div>
                            </div>
                        }
                    </div>
                    <hr />
                    <div className='accordion-3 pb-5 pt-5'>
                        <div className='flex justify-between accordion-head mb-3' onClick={() => handleClick3()}>
                            <p>Print Finish</p>
                            <p><b>+</b></p>
                        </div>
                        {open3 &&
                            <div className='accrdion-body'>
                                <div className='flex gap-5'>
                                    <button className='green-rounded-button flex gap-5 items-center'>Print Finish
                                        <FontAwesomeIcon icon={faRemove} />
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                    <hr />
                    <div className='accordion-4 pb-5 pt-5'>
                        <div className='flex justify-between accordion-head mb-3' onClick={() => handleClick4()}>
                            <p>Logo Position</p>
                            <p><b>+</b></p>
                        </div>
                        {open4 &&
                            <div className='accrdion-body'>
                                <div className='flex flex-wrap gap-5'>
                                    <button className='green-rounded-button flex gap-5 items-center'>Logo Position
                                        <FontAwesomeIcon icon={faRemove} />
                                    </button>
                                </div>
                            </div>
                        }
                    </div>

                    {/* <div>
              <button onClick={handelSubmit}
                className={`green-border-button ${isActive ? 'active-button' : ''}`}>
                Add to Basket
              </button>
            </div> */}

                </div>
            </div>
        </div>
    )
}

export default ProductFocus
