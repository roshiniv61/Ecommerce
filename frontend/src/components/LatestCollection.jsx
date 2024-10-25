import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const LatestCollection = () => {
  const { productsData } = useContext(ShopContext);
  console.log(productsData);

  return (
    <section className='products-cards'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-5'>
          {productsData?.slice(0,4).map((product, i) => {
            return (
              <div className='products-card' key={i}>
                <img src={product?.imageUrl} alt="product-img" width="100%" height="100%" />
                <h2 className='Desktop-H6 text-center mt-5'>{product?.name}</h2>                
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default LatestCollection
