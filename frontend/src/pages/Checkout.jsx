import React, { useState } from 'react'
import Login from '../components/Login.jsx';
import SignUp from '../components/SignUp.jsx';
import DeliveryAddress from '../components/DeliveryAddress.jsx';
import Payment from '../components/Payment.jsx';

const Checkout = () => {
    const tabSectionData = [
        {
            title: 'Contact Details',
        },
        {
            title: 'Delivery Address',
        },
        {
            title: 'Payment',
        },
    ]


    const [active, setActive] = useState(0);
    const [selectedOption, setSelectedOption] = useState('Login');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handelTabClick = (i) => {
        setActive(i)
    }
    return (
        <div className='checkout-page'>
            <div className='container mx-auto px-4'>
                <div className='page-title'>
                    <h3>Checkout</h3>
                </div>
            </div>
            <section className='tab-section'>
                <div className='container mx-auto px-4'>
                    <div className='grid grid-cols-12 gap-5'>
                        <div className='md:col-span-4 col-span-12'>
                            {tabSectionData?.map((data, i) => {
                                return (
                                    <div key={i} className={`tab-title-wrapper  ${active == i ? 'active' : ""}`}
                                        onClick={() => handelTabClick(i)} >
                                        <p>{data?.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='md:col-span-8 col-span-12'>

                            {active == 0 && <div>
                                <div> <h5 className='mb-5'>Contact Details</h5></div>
                                <div className='flex flex-col'>
                                    <div className='mb-5'>
                                        <input className='mr-3'
                                            type="radio"
                                            value="Login"
                                            checked={selectedOption === 'Login'}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor='Login' className='text-medium-bold'>Login</label>
                                    </div>


                                    {selectedOption === 'Login' && <Login />}
                                    <div className='mb-5'>
                                        <input className='mr-3'
                                            type="radio"
                                            value="NewCustomer"
                                            checked={selectedOption === 'NewCustomer'}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor='NewCustomer' className='text-medium-bold'>New Customer</label>
                                    </div>
                                    {selectedOption === 'NewCustomer' && <SignUp />}
                                </div>

                            </div>}

                            {active == 1 && <div>
                                <DeliveryAddress />
                            </div>}


                            {active == 2 && <div>
                                <Payment />
                            </div>}

                        </div>

                    </div>

                </div>
            </section>

        </div>
    )
}

export default Checkout
