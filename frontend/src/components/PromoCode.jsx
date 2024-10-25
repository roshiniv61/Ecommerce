import React, { useState } from 'react';

const PromoCode = ({ promoCode,setPromoCode,uniqueCodePromoCode}) => {

  const handleSubmitCodeClick = () => {  
    setPromoCode(uniqueCodePromoCode); // Store the unique code in state
  };

  return (
    <div className="mb-12">
    <p className="mb-5"> Promo Code </p>
    <p className='flex justify-center py-2 px-5 rounded-xl border-2 border-black '>{uniqueCodePromoCode}</p>
   {uniqueCodePromoCode && <div className='green-button w-[100%] text-center mt-5' onClick={
      handleSubmitCodeClick
    }>
      Submit Code
    </div>}
  </div>
  );
};

export default PromoCode;
