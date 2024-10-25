import React, { Fragment, useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCircleCheck, faEye, faArrowUpFromBracket, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import LogoImg from '../assets/Logo.png';
import ImageUpload from '../components/ImageUpload';
import ProductSize from '../components/ProductSize';
import Visa from '../assets/Visa.png';
import Paypal from '../assets/paypal.png';
import Gpay from '../assets/Gpay.png';
import PaymentOptions from '../components/PaymentOptions ';
import PromoCode from '../components/PromoCode';


const Cart = () => {
  const { cartItems, removeFromCart, currency, updateCartItemLogo, counters, setCounters, handleCloseCounterSize, handleIncrementCounterSize,
    handleDecrementCounterSize, handleSizeClick, paymentMethod, setPaymentMethod,
    finalPriceDetails, setFinalPriceDetails, finalData, setFinalData,
    promoCode, setPromoCode, uniqueCodePromoCode } = useContext(ShopContext);
  const [logos, setLogos] = useState({});
  const [selectedProductId, setSelectedProductId] = useState(null); // Track selected product for editing
  console.log(logos, "logos")
  const [totalPrice, setTotalPrice] = useState('');
  const [totalVATPrice, setTotalVATPrice] = useState('');
  const [vat, setVat] = useState('1');
  const [subTotalPrice, setSubTotalPrice] = useState('');
  const [logoPreview, setLogoPreview] = useState(null);



  const itemsArray = React.useMemo(() => Object.values(cartItems), [cartItems]);

  const handelLogoPreview = (productId) => {
    setLogoPreview(productId);
  }




  useEffect(() => {
    // const initialTotalPrice = {};
    const totalPrice = Object.values(cartItems).reduce((total, item) => {
      // Sum up price for all sizes
      const sizeCount = item?.sizes?.reduce((sum, size) => sum + size.count, 0);
      return total + (sizeCount * item?.price);
    }, 0);
    setTotalPrice(totalPrice);

    const totalVATPrice = Object.values(cartItems).reduce((total, item) => {
      // Sum up price for all sizes
      const sizeCount = item.sizes.reduce((sum, size) => sum + size.count, 0);
      return total + (sizeCount * vat);
    }, 0);
    setTotalVATPrice(totalVATPrice);

    const subTotal = totalPrice + totalVATPrice;
    setSubTotalPrice(subTotal)
    setFinalPriceDetails({
      totalPrice: totalPrice,
      totalVATPrice: totalVATPrice,
      subTotal: subTotal,
    });
    setFinalData(finalPriceDetails, itemsArray)
  }, [cartItems, setTotalPrice, setTotalVATPrice,
    setSubTotalPrice, setFinalPriceDetails, setFinalData,]);

  console.log(itemsArray, 'itemsArray')

  // logo


  // const handleFileChange = (productId, file) => {
  //   if (file) {
  //     const fileUrl = URL.createObjectURL(file);
  //     console.log(fileUrl,'handleFileChange')
  //     // updateCartItemLogo(productId, { file: fileUrl, status: true }      );
  //     setLogos(prevLogos => ({
  //       ...prevLogos,
  //       [productId]: { file: fileUrl, status: true }
  //     }));
  //   }
  // };

  const handleLogoUpdate = (productId, file) => {
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      updateCartItemLogo(productId, { file: fileUrl, status: true });
      setLogos(prevLogos => ({
        ...prevLogos,
        [productId]: { file: fileUrl, status: true }
      }));
    }
  };



  const handleDeleteClick = (productId) => {
    setSelectedProductId(productId); // Set the product ID for which delete action is initiated
    setLogos(prevLogos => ({
      ...prevLogos,
      [productId]: { file: null, status: false } // Reset to default logo or handle deletion
    }));
    updateCartItemLogo(productId, { [productId]: { file: null, status: false } })
  };



  // const handleSubmitCodeClick = () => {
  //   setPromoCode()
  // }



  return (
    <div>
      cart
      <>{counters?.length} ,"counters.length"</>

      <div className='grid grid-cols-12 gap-5'>
        <div className='col-span-8'>
          {itemsArray.length > 0 ? (
            itemsArray.map((item, i) => {
              return (
                <section key={i} className='cart-items mb-5'>
                  <div className='container mx-auto px-4'>
                    <div className=''>
                      <div className="grid grid-cols-12 gap-5 mb-12">
                        <div className='md:col-span-4 col-span-12'>
                          <img src={item?.productImage} alt="Product" style={{ maxWidth: '250px' }} />
                        </div>
                        <div className="md:col-span-8 col-span-12">
                          <div className="grid grid-cols-12 gap-5 mb-12">
                            <div className='md:col-span-6 col-span-12'>
                              <h6>{item?.productName}</h6>
                              <p >Product Code: {item?.productCode}</p>
                            </div>
                            <div className='md:col-span-6 col-span-12'>
                              <div className='flex gap-5 justify-end mb-5'>
                                {item?.price &&
                                  <p className='text-large-bold'> ${item?.price?.toFixed(2)}</p>}
                                <div onClick={() => removeFromCart(item?.productId)}>
                                  <FontAwesomeIcon icon={faTrash} />
                                </div>
                              </div>

                            </div>
                          </div>

                          {/* sizes */}
                          <div className='flex gap-5 justify-between'>
                            <p>Sizes:</p>
                            <ul>
                              {item?.sizes && item?.sizes.map((size, index) => (
                                <li className='h-[40px] mb-5' key={index}>{size.size}</li>
                              ))}
                            </ul>
                            <div>
                              {item && <ProductSize
                                cartSingleData={item?.sizes}
                                counters={counters}
                                setCounters={setCounters}
                                handleCloseCounterSize={handleCloseCounterSize}
                                handleIncrementCounterSize={handleIncrementCounterSize}
                                handleDecrementCounterSize={handleDecrementCounterSize}
                                handleSizeClick={handleSizeClick}
                              />}
                            </div>
                          </div>

                          {/* color/print  */}
                          <div className="grid grid-cols-12 gap-5 mb-12">
                            <div className='md:col-span-6 col-span-12'>

                              {item?.color &&
                                <p className='flex gap-5 justify-between'>
                                  Color:
                                  <span
                                    style={{
                                      backgroundColor: item?.color,
                                      padding: '5px',
                                      borderRadius: '3px',
                                      border: '2px solid var(--background)'
                                    }}
                                  >
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                  </span>
                                </p>}
                              {item?.printfinish &&
                                <p className='flex gap-5 justify-between'>Print Finish:
                                  <span> {item?.printfinish}</span></p>}

                              {item?.logoposition &&
                                <p className='flex gap-5 justify-between'>Logo Position:
                                  <span> {item?.logoposition}</span></p>}
                            </div>
                            <div className='md:col-span-6 col-span-12'>

                              <div className='vat-price'>
                                <p className='flex justify-end text-large-tiny'> $1</p>
                                <p className='flex justify-end'>Each (ex VAT)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 place-items-center mb-12">
                      <div style={{ maxWidth: '250px' }} className="md:col-span-4 col-span-12"></div>

                      <div className="md:col-span-4 col-span-12">
                        Reference Number
                      </div>
                      <div className="md:col-span-4 col-span-12">
                        <p className='flex justify-center py-2
                           px-5 rounded-xl border-2 border-black'>{item?.referenceNumber}</p>
                      </div>
                    </div>


                    <div className="grid grid-cols-12">
                      <div style={{ maxWidth: '250px' }} className="md:col-span-4 col-span-12"></div>
                      <div className="md:col-span-8 col-span-12">
                        {item?.logo?.file == null &&

                          <ImageUpload
                            productId={item.productId}
                            // handleFileChange={handleFileChange}
                            handleLogoUpdate={handleLogoUpdate}
                            logosData={logos[item.productId] || { file: null, status: false }}
                            isEditing={selectedProductId === item.productId} // Pass editing state
                            buttonName="Upload logo"
                          />}

                        {item?.logo?.file != null &&
                          <>
                            {/* <div className='mb-5 flex gap-5 justify-end mt-5'
                                onClick={() => handleDeleteClick(item.productId)}>
                                <FontAwesomeIcon icon={faTrash} />
                              </div> */}
                            {/* {item?.logo?.file != null &&
                                <img src={item?.logo?.file} alt="" width="50%" height="50%" />
                              } */}
                            <div className='mt-5 grid grid-flow-col justify-stretch gap-5 logo-success-wrapper'>
                              <div className='w-[100%]' onClick={() => handelLogoPreview(item.productId)}>
                                <span className='mr-3'>
                                  <FontAwesomeIcon icon={faCircleCheck} color="var(--primary-color)" />
                                </span>
                                <span>Logo Uploaded</span>
                              </div>
                              <div className='green-button w-[100%]' onClick={() => handelLogoPreview(item.productId)}>
                                <span className='mr-3'>
                                  <FontAwesomeIcon icon={faEye} color="var(--secondary-color)" />
                                </span>
                                <span>View</span>
                              </div>

                              <ImageUpload
                                productId={item.productId}
                                // handleFileChange={handleFileChange}
                                handleLogoUpdate={handleLogoUpdate}
                                logosData={logos[item.productId] || { file: null, status: false }}
                                isEditing={selectedProductId === item.productId} // Pass editing state
                                buttonName="Replace"
                              />

                            </div>
                          </>
                        }


                      </div>
                    </div>

                  </div>

                </section>
              )
            })
          ) : (
            <p>No items in cart</p>
          )}
        </div>


        <div className='col-span-4'>
          <div className='cart-sidebar'>
            <h6 className='mb-[24px]'>Order Summary</h6>
            {totalPrice &&
              <div>
                <p className='flex gap-5 justify-between mb-[16px]'>
                  Product Costs:<span>{currency}{totalPrice.toFixed(2)}</span></p>
              </div>}
            <div>
              <p className='flex gap-5 justify-between text-end mb-[16px]'>
                Total (ex. VAT)<span>Total <br />(ex. VAT)</span></p>
            </div>
            {totalVATPrice &&
              <div>
                <p className='flex gap-5 justify-between text-end pb-[24px] mb-[24px] border-b-2'>
                  VAT<span>{currency}{totalVATPrice}</span></p>
              </div>}
            {subTotalPrice &&
              <div>
                <p className='text-small-bold flex gap-5 justify-between text-end pb-[24px] mb-[24px] border-b-2 '>
                  Sub Total <span>{currency}{subTotalPrice.toFixed(2)}</span></p>
              </div>}

            <div className='logo-updates-buttons-side-bar mb-5'>

              {itemsArray.length > 0 ? (
                itemsArray.map((item, i) => {
                  return (
                    <Fragment key={i}>
                      {item?.logo?.file != null &&
                        <div className='mt-4 mb-10'>
                          <div className='mb-5 flex gap-5 justify-end'
                            onClick={() => handleDeleteClick(item?.productId)}>
                            <FontAwesomeIcon icon={faTrash} />
                          </div>
                          {logoPreview == item?.productId &&
                            <>
                              {item?.logo?.file ? (
                                <img src={item?.logo?.file}
                                  alt={`Logo-${item?.productId}`} className='w-[100%] h-[100%]' />
                              ) : (
                                ''
                              )}
                            </>
                          }

                          <div className='mt-5 grid grid-flow-col justify-stretch gap-5'>
                            <div className='green-button text-center w-[100%]' onClick={() => handelLogoPreview(item.productId)}>
                              <span className='mr-3'>
                                <FontAwesomeIcon icon={faEye} color="var(--secondary-color)" />
                              </span>
                              <span>View</span>
                            </div>


                            <ImageUpload
                              productId={item.productId}
                              // handleFileChange={handleFileChange}
                              handleLogoUpdate={handleLogoUpdate}
                              logosData={logos[item.productId] || { file: null, status: false }}
                              isEditing={selectedProductId === item.productId} // Pass editing state
                              buttonName="Replace"
                            />

                          </div>
                        </div>}
                    </Fragment>
                  )
                })) :
                ("no items")}
            </div>




            <PromoCode
              promoCode={promoCode}
              setPromoCode={setPromoCode}
              uniqueCodePromoCode={uniqueCodePromoCode} />


            <div>
              <PaymentOptions
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod} />
            </div>

          </div>
        </div>
      </div>
    </div >
  );
}



export default Cart


{/* {Object.values(cartItems).length > 0 ? (
                Object.values(cartItems).map((item, i) => (
                  <Fragment  key={i}>
                    {logos[item.productId]?.status != null &&
                      <div className='mt-4 mb-10'>
                        <div className='mb-5 flex gap-5 justify-end'
                          onClick={() => handleDeleteClick(item?.productId)}>
                          <FontAwesomeIcon icon={faTrash} />
                        </div>
                        {logos[item.productId]?.file ? (
                          <img src={logos[item.productId].file}
                            alt={`Logo-${item.productId}`} className='w-[100%] h-[100%]' />
                        ) : (
                          ''
                        )}

                        <div className='mt-5 flex gap-5'>
                          <div className='green-button' onClick={() => handelLogoPreview(item.productId)}>
                            <span className='mr-3'>
                              <FontAwesomeIcon icon={faEye} color="var(--secondary-color)" />
                            </span>
                            <span>View</span>
                          </div>



                          <div className='green-button' onClick={() => handleReplaceClick(item.productId)}>
                            <span className='mr-3'>
                              <FontAwesomeIcon icon={faArrowUpFromBracket} color="var(--secondary-color)" />
                            </span>
                            <span>Replace</span>
                          </div>
                        </div>
                      </div>}
                  </Fragment>
                ))
              ) : (
                <p>No items in cart</p>
              )} */}