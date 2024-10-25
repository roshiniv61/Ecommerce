import React from 'react'
import Banner from '../components/Banner'
import LatestCollection from '../components/LatestCollection'
import Spacer from '../components/spacer'
import ShopCategory from '../components/ShopCategory'
import ShopByBrand from '../components/ShopByBrand'
import TwoColSection from '../components/TwoColSection'
import TitleComponent from '../components/TitleComponent'
import ProductCardsSlider from '../components/ProductCardsSlider'
import EmailSubscribe from '../components/EmailSubscribe'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Banner />
      <Spacer />
      <TitleComponent Class="shop-by-category" title="Latest Collection" />

      <LatestCollection />
      <Spacer />
      <TitleComponent Class="shop-by-category" title="Shop by Brand" />

      <ShopByBrand />
      <Spacer />
      <TitleComponent Class="shop-by-category" title="Shop by Category"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci."
        button='Shop All' />
      <ShopCategory />

      <Spacer />
      <TwoColSection />
      <Spacer />
      <TitleComponent Class="popular-products" title="Popular Products" button='Shop All' />
      <ProductCardsSlider />
      <Spacer />
      <TitleComponent Class="shop-by-category" title="Reviews"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci."
        />
        <EmailSubscribe />
        <Spacer />
        <Footer />

    </div>
  )
}

export default Home
