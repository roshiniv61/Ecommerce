import React, { Fragment, useContext, useEffect, useState } from 'react';
import Logo from '../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom'; // Correct import


const Header = () => {
    const [visible, setVisible] = useState(false);
    const { cartItems } = useContext(ShopContext);
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/cart'); // Navigate to cart
        window.location.reload(); // Refresh the page (optional)
    };

    const itemsArray = React.useMemo(() => Object.values(cartItems), [cartItems]);
    const cartLength = itemsArray.length;

    const totalSizeCount = Object.values(itemsArray).reduce((acc, item) => {
        return acc + item.sizes.reduce((sizeAcc, size) => sizeAcc + size.count, 0);
    }, 0);
    console.log(cartLength, "cartlength")
    console.log(totalSizeCount, "totalSizeCount size also")


    return (
        <section className='header'>
            <div className='container mx-auto px-4'>
                <div className="flex items-center justify-between font-medium ">
                    <img src={Logo} alt="Tp-Workwear" className='w-[100px] h-[30px] lg:w-[auto] lg:h-[auto]' />

                    <SearchBar />

                    <div className='icons-wrapper'>
                        <Link to='/cart' className='relative' onClick={handleCartClick}>
                            <FontAwesomeIcon icon={faShoppingCart} className='icon w-5' />
                            {totalSizeCount ?
                                <div className='absolute right-[-5px] bottom-[4px] w-4 h-4 rounded-full bg-black text-white text-[10px] text-center'>{totalSizeCount}</div>
                                : ""}
                        </Link>

                        <div className='group relative'>
                            <FontAwesomeIcon icon={faUser} className='icon w-5' />
                            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                                    <p className='cursor-pointer hover:text-black'>Orders</p>
                                    <p className='cursor-pointer hover:text-black'>LogOut</p>
                                </div>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faBars} className='icon lg:hidden w-5' onClick={() => setVisible(true)} />
                        <Link to='/wishlist' className='relative'>
                            <FontAwesomeIcon icon={faHeart} className='icon w-5' />
                            <div className='absolute right-[-5px] bottom-[4px] w-4 h-4 rounded-full bg-black text-white text-[10px] text-center'>10</div>
                        </Link>
                    </div>
                </div>

                {/* mobile menu */}
                <div className={`absolute top-0 right-0 bottom-0 bg-white 
                    ${visible ? "w-[100%] block" : "w-[0] hidden"}
                    `}
                >
                    <FontAwesomeIcon icon={faTimes} className='icon w-5'
                        onClick={() => setVisible(false)} />
                    <ul className="flex flex-col justify-center  items-center gap-5">
                        <li className='border-b border-grey-200 w-[100%] p-5'>
                            <NavLink to="/">
                                <p>Home</p>
                            </NavLink>
                        </li>
                        <li className='border-b border-grey-200 w-[100%] p-5'>
                            <NavLink to="/collection">
                                <p>Collection</p>
                            </NavLink>
                        </li>
                        <li className='border-b border-grey-200 w-[100%] p-5'>
                            <NavLink to="/about">
                                <p>About</p>
                            </NavLink>
                        </li>
                        <li className='border-b border-grey-200 w-[100%] p-5'>
                            <NavLink to="/contact">
                                <p>Contact</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </section>


    )
}

export default Header
