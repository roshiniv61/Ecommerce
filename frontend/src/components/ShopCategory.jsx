import React ,{useContext} from 'react'
import { ShopContext } from '../context/ShopContext'

const ShopCategory = () => {
    const { categoriesData } = useContext(ShopContext);
  console.log(categoriesData);

  return (
    <section className='shop-category'>
      <div className='container mx-auto px-4'>
      <div className='grid md:grid-cols-5 grid-cols-1 gap-5'>
          {categoriesData?.map((category, i) => {
            return (
              <div className='products-card' key={i}>
                <img src={category?.imageUrl} alt="product-img" width="100%" height="100%" />
                <h2 className='Desktop-H6 text-center mt-5'>{category?.name}</h2>                
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ShopCategory
