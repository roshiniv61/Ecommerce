import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const TopBar = () => {
    return (
        <section className='top-bar'>
            <div className='container mx-auto px-4'>
                <div>
                    <ul className='flex gap-10 justify-end'>
                        <li>
                            <a href="tel:+1234567890" className='flex gap-5 items-center' >
                                <FontAwesomeIcon icon={faPhone} />
                                <span className="font-medium">123 456 7890</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:example@example.com" className='flex gap-5 items-center'>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span className="font-medium">example@example.com</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default TopBar
