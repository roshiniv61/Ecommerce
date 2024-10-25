import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Order'
import NavBar from './components/NavBar'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Usp from './components/Usp'
import Wishlist from './pages/WishList'
import Checkout from './pages/Checkout'
import OrderComfirmed from './pages/OrderComfirmed'
import AccountPortal from './pages/AccountPortal'
// import ProductSingle from './components/ProductSingle'
// import ProductFocus from './pages/ProductFocus';

const App = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <NavBar />
      <Usp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        {/* <Route path="/productnew/:productId" element={<ProductSingle />} /> */}

        


        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/orderconfirmed" element={<OrderComfirmed />} />
        <Route path="/account-portal" element={<AccountPortal />} />

        <Route path="/wishlist" element={<Wishlist />} />
        {/* <Route path="/product/:productId/product-focus" element={<ProductFocus />} /> */}

      </Routes>
    </div>
  )
}

export default App
