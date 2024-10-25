import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/Logo.png';

const NavBar = () => {
    return (
        <section className='nav-bar lg:block hidden'>
            <div className='container mx-auto px-4'>
                <ul className="flex justify-center items-center gap-5">
                    <li>
                        <NavLink to="/" className='flex flex-col items-center'>
                            <p>Home</p>
                            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/collection" className='flex flex-col items-center' >
                            <p>Collection</p>
                            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className='flex flex-col items-center'>
                            <p>About</p>
                            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className='flex flex-col items-center'>
                            <p>Contact</p>
                            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </section>

    )
}

export default NavBar
