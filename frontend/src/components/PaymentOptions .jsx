import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Visa from '../assets/Visa.png';
import Paypal from '../assets/paypal.png';
import Gpay from '../assets/Gpay.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from '../context/ShopContext';



const PaymentOptions = ({setPaymentMethod,paymentMethod}) => {
    const { finalData } = useContext(ShopContext);

    const navigate = useNavigate();

    const paymentMethods = [
        { id: 'visa', label: 'Visa', src: Visa },
        { id: 'paypal', label: 'Paypal', src: Paypal },
        { id: 'gpay', label: 'Gpay', src: Gpay },
    ];

    const handleSubmitCheckoutClick = () => {
        if (paymentMethod) {
            // Navigate to the order page
            console.log(finalData)
            alert(JSON.stringify(finalData, null, 2),"data");
            navigate('/checkout'); // Adjust the route as needed


        } else {
            alert('Please select a payment method.');
        }
    };

    return (
        <div>
            <div className='blue-button w-[100%] text-center mt-5' onClick={handleSubmitCheckoutClick}>
                Continue To Checkout
                <span className='ml-3'>
                    <FontAwesomeIcon icon={faArrowRight} color="var(--secondary-color)" />
                </span>
            </div>
            <div className='grid grid-flow-col justify-stretch gap-5 mt-5 '>
                {paymentMethods.map((method) => (
                    <label key={method.id} className={`flex items-center cursor-pointer ${paymentMethod === method.id ? 'selected' : ''}`}>
                        <input
                            type='radio'
                            name='payment'
                            value={method.id}
                            checked={paymentMethod === method.id}
                            onChange={() => setPaymentMethod(method.id)}
                            className='hidden' // Hide the default radio button
                        />
                        <div className={`${paymentMethod === method.id ? 'border-b-4  border-[var(--primary-color)] rounded' : ''}`} >
                            <img src={method.src} alt={method.label} className='rounded' />
                        </div>
                    </label>
                ))}
            </div>

        </div>
    );
};

export default PaymentOptions;
