import React from 'react'
import logo from '../assets/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';




const data =
    [
        {
            title: "Products",
            pages: [
                {
                    title: "Tshirts",
                    link: "#"
                },
                {
                    title: "Polo Shirts",
                    link: "#"
                },
                {
                    title: "Jumpers",
                    link: "#"
                },
                {
                    title: "Fleeces",
                    link: "#"
                },
                {
                    title: "Jackets",
                    link: "#"
                },
                {
                    title: "Hats",
                    link: "#"
                },
                {
                    title: "Hi-Vis & PPE",
                    link: "#"
                },
                {
                    title: "Trousers",
                    link: "#"
                },
                {
                    title: "Footwear",
                    link: "#"
                },
                {
                    title: "Hoodies",
                    link: "#"
                },
                {
                    title: "Jumpers",
                    link: "#"
                },
                {
                    title: "Shirts",
                    link: "#"
                },
            ]
        },
        {
            title: "Help",
            pages: [
                {
                    title: "Contact Us",
                    link: "#"
                },
                {
                    title: "FAQs",
                    link: "#"
                },
                {
                    title: "Payment Options",
                    link: "#"
                },
                {
                    title: "Delivery",
                    link: "#"
                },
                {
                    title: "Returns",
                    link: "#"
                },

            ]
        },
        {
            title: "About",
            pages: [
                {
                    title: "About Us",
                    link: "#"
                },

            ]
        }
    ]


const Footer = () => {
    return (
        <section className='footer'>
            <div className='container mx-auto px-4'>
                <div className='wrapper grid lg:grid-cols-5 grid-cols-1 gap-5'>
                    <div className='logo-wrapper'>
                        <img src={logo} alt='footer-logo' width="100%" height="100%" />
                    </div>

                    {data?.map((data, i) => {
                        return (
                            <div key={i} className=''>
                                <h3 className='text-medium-bold mb-5'>{data?.title}</h3>
                                {data?.pages?.map((pages, i) => {
                                    return (
                                        <div key={i}>
                                            <p>{pages?.title}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                    <div>
                        <div>
                        <h3 className='text-medium-bold mb-5'>Follow Us</h3>
                            <div className="social-links flex gap-5 mb-5 border-b-2 pb-5">
                                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>
                                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                </a>
                                <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>
                            </div>
                        </div>

                        <ul className=''>
                            <li className='mb-2'>
                                <a href="tel:+1234567890" className='flex gap-5 items-start ' >
                                    <FontAwesomeIcon icon={faPhone} />
                                    <span className="font-medium">123 456 7890</span>
                                </a>
                            </li>
                            <li className='mb-2'>
                                <a href="mailto:example@example.com" className='flex gap-5 items-start'>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <span className="font-medium">example@example.com</span>
                                </a>
                            </li>
                            <li className='mb-2'>
                                <a href="mailto:example@example.com" className='flex gap-5 items-start'>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    <span className="font-medium">1234 Elm Street, Springfield</span>
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div>

                    </div>
                </div>
                <div>
                    <p>
                        copyright website by scube.co
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer
