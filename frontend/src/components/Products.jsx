import React from 'react'
import productDefaultImg from '../assets/Rectangle 5.png';

const Products = ({ product }) => {
    return (
        <div className='products-card'>
            <img src={product?.imageUrl} alt="product-img" width="100%" height="100%" />
            <h2 className='Desktop-H6'>{product?.name}</h2>
            <p className='text-tiny-normal'>{product?.category}</p>
            {/* <p className='text-tiny-normal'>{product?.gender}</p> */}
            {/* <p className='text-tiny-normal'>{product?.brand}</p> */}
            {/* <p>{product?.color}</p> */}
            <p className='text-regular-bold'>${product?.price}</p>
            <a href={`/product/${product?.id}`} >
            <button className='green-border-button'>
                View Product
            </button>
            </a>
        </div>
    )
}

export default Products
