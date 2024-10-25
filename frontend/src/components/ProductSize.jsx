// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'


// const ProductSize = ({ singleproductData, counters, setCounters,
//   handleCloseCounterSize, handleIncrementCounterSize,
//     handleDecrementCounterSize,handleSizeClick
//  }) => {

//   console.log(singleproductData, 'singleproductDatacounters');



//   const handleClick = (index, size) => {
//     setCounters(index, size); // Call the function passed as a prop
// };


// console.log(counters,"counters")


//   return (
//     <div>   

//        <div className='counter-wrapper flex gap-5 flex-wrap mb-5'>
//         {counters?.length > 0 && counters?.map((data, i) => {
//           return (
//             <div key={i}>
//               <div className='flex justify-between items-center gap-5'>
//                 <p className='text-regular-normal'> {data.size}</p>
//                 <div onClick={() => handleCloseCounterSize(i)}>
//                   <FontAwesomeIcon icon={faTrash} />
//                 </div>


//               </div>
//               <div className='flex border-2 border-black rounded w-fit'>
//                 <button className='p-2' onClick={() => handleDecrementCounterSize(i)}>-</button>
//                 <p className='px-8 py-2 border-l-2 border-r-2 border-black'>{data.count}</p>
//                 <button className='p-2' onClick={() => handleIncrementCounterSize(i)}>+</button>
//               </div>
//             </div>
//           );
//         })}
//       </div> 

//       <div className='flex flex-wrap gap-3'>
//         {singleproductData?.sizes?.map((size, i) => {
//           const isActive = counters && counters?.length > 0 && 
//           counters?.some(counter => counter.size === size);
//           return (
//             <div key={i} onClick={() => handleSizeClick(i, size)}
//               className={`class-${i} border-2 rounded p-2 w-16 text-center ${isActive ? 'active-button' : ''} `}>
//               {size}
//             </div>
//           );
//         })}
//       </div>


//     </div>
//   );
// };

// export default ProductSize;

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ProductSize = ({
  singleproductData,
  counters,
  setCounters,
  handleCloseCounterSize,
  handleIncrementCounterSize,
  handleDecrementCounterSize,
  handleSizeClick,cartSingleData
}) => {
  useEffect(() => {
    setCounters(cartSingleData); // Set counters to an empty array
  }, [setCounters]);

  
  return (
    <div>
      {/* <>{counters?.length} ,"counters.length"</> */}

      {singleproductData && 
      <>
      <div className='counter-wrapper flex gap-5 flex-wrap mb-5'>
        {counters && counters?.length > 0 && counters?.map((data, i) => (
          <div key={i}>
            <div className='flex justify-between items-center gap-5'>
              <p className='text-regular-normal'>{data.size}</p>
              <div onClick={() => handleCloseCounterSize(i)}>
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </div>
            <div className='flex border-2 border-black rounded w-fit'>
              <button className='p-2' onClick={() => handleDecrementCounterSize(i)}>-</button>
              <p className='px-8 py-2 border-l-2 border-r-2 border-black'>{data.count}</p>
              <button className='p-2' onClick={() => handleIncrementCounterSize(i)}>+</button>
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-wrap gap-3'>
        {singleproductData?.sizes?.map((size, i) => {
          const isActive = counters?.some(counter => counter.size === size);
          return (
            <div key={i} onClick={() => handleSizeClick(i, size)}
              className={`class-${i} border-2 rounded p-2 w-16 text-center ${isActive ? 'active-button' : ''}`}>
              {size}
            </div>
          );
        })} </div> 
        </>}


        {cartSingleData && 
      <>
      <div className='counter-wrapper flex flex-col gap-5 flex-wrap mb-5'>
        {counters?.length > 0 && counters?.map((data, i) => (
          <div key={i}>
            <div className='flex justify-end items-center gap-5'>
              {/* <p className='text-regular-normal'>{data.size}</p> */}
              {/* <div onClick={() => handleCloseCounterSize(i)}>
                <FontAwesomeIcon icon={faTrash} />
              </div> */}
            </div>
            <div className='flex border-2 border-black rounded w-fit'>
              <button className='p-2' onClick={() => handleDecrementCounterSize(i)}>-</button>
              <p className='px-8 py-2 border-l-2 border-r-2 border-black'>{data.count}</p>
              <button className='p-2' onClick={() => handleIncrementCounterSize(i)}>+</button>
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-wrap gap-3'>
        {cartSingleData?.sizes?.map((size, i) => {
          const isActive = counters.some(counter => counter.size === size);
          return (
            <div key={i} onClick={() => handleSizeClick(i, size)}
              className={`class-${i} border-2 rounded p-2 w-16 text-center ${isActive ? 'active-button' : ''}`}>
              {size}
            </div>
          );
        })} </div> 
        </>}

       


      </div>
    // </div>
  );
};

export default ProductSize;

