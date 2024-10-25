import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import ProductSize from '../components/ProductSize';
import ImageSingleProduct from '../components/ImageSingleProduct';




const Product = () => {
  const { productId } = useParams();
  const { productsData, currency, addToCart, cartItems, setCartItems,
    counters, setCounters, handleCloseCounterSize, handleIncrementCounterSize,
    handleDecrementCounterSize,handleSizeClick
  } = useContext(ShopContext);
  const [singleproductData, setSingleproductData] = useState(false);
  const [colorSelected, setColorSelected] = useState([]);
  // const [counters, setCounters] = useState([]);
  const [printFinish, setPrintFinish] = useState('');
  const [logoPosition, setLogoPosition] = useState('');
  // const [logoToPrint,setLogoToPrint]  = useState('');
  const [loading, setLoading] = useState(true);








  useEffect(() => {
    const fetchSingleProductData = () => {
      if (!productsData) {
        console.error('No products data available');
        setLoading(false);
        return;
      }

      const product = productsData.find(item => item.id === Number(productId));
      console.log('Found product:', product); // Debug: Log found product
      setSingleproductData(product);
      setLoading(false); // Set loading to false after data is fetched
    };

    setLoading(true); // Start loading
    fetchSingleProductData();
  }, [productId, productsData]);




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


  const toggleColor = (e) => {
    setColorSelected(e.target.value)
  }

  const handelPrintFinish = (value) => {
    setPrintFinish(value);
  }

  const handleLogoPosition = (value) => {
    setLogoPosition(value);
  }

  const handelSubmit = () => {
    if (!singleproductData && counters.length == 0) return;


    const newItem = {
      productId: singleproductData?.id,
      productName: singleproductData?.name,
      productCode: singleproductData?.productcode,
      productImage: singleproductData?.images[0],
      referenceNumber: singleproductData?.referencenumber,
      sizes: counters,
      price: singleproductData?.price,
      color: colorSelected,
      printfinish: printFinish,
      logoposition: logoPosition,
    };

    // Call addToCart instead of setCartItems
    addToCart({ [singleproductData?.id]: newItem });
    setCartItems({ [singleproductData?.id]: newItem });
    console.log({ [singleproductData?.id]: newItem }, "{ [singleproductData?.id]: newItem }")

    setColorSelected([]);
    // setCounters(newItem?.sizes);
    setPrintFinish('');
    setLogoPosition('');

  }

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    if (cartItems != null) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const isActive = Object.keys(cartItems).length > 0;

  return (
    <section className='single-product m-10'>
      <div className='container mx-auto px-4'>
        {/* {!hasData && */}
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
                  <ProductSize
                    singleproductData={singleproductData}
                    counters={counters}
                    setCounters={setCounters}
                    handleCloseCounterSize={handleCloseCounterSize}
                    handleIncrementCounterSize={handleIncrementCounterSize}
                    handleDecrementCounterSize={handleDecrementCounterSize}
                    handleSizeClick={handleSizeClick}
                  />
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
                    {singleproductData?.color.map((color, i) => (
                      <div key={i} className='relative'>
                        <input
                          type="checkbox"
                          id={`colorPicker-${i}`}
                          value={color}
                          checked={colorSelected.includes(color)}
                          onChange={toggleColor}
                          style={{
                            marginRight: '-15px', zIndex: '99', position: 'absolute', left: '7px',
                            top: '25%'
                          }}
                        />
                        <label
                          className={`px-3 rounded border-2  ${`${colorSelected}` ? `border-green-800` : "border-gray-900"}`}
                          htmlFor={`colorPicker-${i}`}
                          style={{ backgroundColor: color, }}
                        >
                          {/* The label is used for selecting colors, no text is displayed */}
                        </label>
                      </div>
                    ))}


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
                    <button onClick={() => handelPrintFinish('viewproduct')}
                      className={`green-border-button ${printFinish === 'viewproduct' ? 'active-button' : ''}`}>
                      View Product
                    </button>
                    <button onClick={() => handelPrintFinish('Embroidery')}
                      className={`green-border-button ${printFinish === 'Embroidery' ? 'active-button' : ''}`}>
                      Embroidery
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
                    <button onClick={() => handleLogoPosition('Right Chest')}
                      className={`green-border-button ${logoPosition === 'Right Chest' ? 'active-button' : ''}`}>
                      Right Chest
                    </button>
                    <button onClick={() => handleLogoPosition('Left Chest')}
                      className={`green-border-button ${logoPosition === 'Left Chest' ? 'active-button' : ''}`}>
                      Left Chest
                    </button>
                    <button onClick={() => handleLogoPosition('Right Sleeve')}
                      className={`green-border-button ${logoPosition === 'Right Sleeve' ? 'active-button' : ''}`}>
                      Right Sleeve
                    </button>
                    <button onClick={() => handleLogoPosition('Left Sleeve')}
                      className={`green-border-button ${logoPosition === 'Left Sleeve' ? 'active-button' : ''}`}>
                      Left Sleeve
                    </button>
                    <button onClick={() => handleLogoPosition('Back')}
                      className={`green-border-button ${logoPosition === 'Back' ? 'active-button' : ''}`}>
                      Back
                    </button>


                  </div>
                </div>
              }
            </div>

            <div>
              <button onClick={handelSubmit}
                className={`green-border-button ${isActive ? 'active-button' : ''}`}>
                Add to Basket
              </button>
            </div>

          </div>
        </div>
        {/* } */}

        {/* {hasData &&
          <ProductFocus singleproductData={singleproductData} data={outPut} currency={currency} />
        } */}
      </div>
    </section>
  )
}

export default Product
