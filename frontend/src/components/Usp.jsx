import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

const Usp = () => {
    return (
        <section className='usp-section lg:block hidden'>
            <div className='container mx-auto px-4'>
                <div className='flex gap-12 justify-center'>
                    <div className='flex gap-5 items-center'>
                        <FontAwesomeIcon icon={faTruck} />
                        <span className='text-medium-bold'>USP1</span>
                    </div>
                    <div className='flex gap-5  items-center'>
                        <FontAwesomeIcon icon={faTruck} />
                        <span className='text-medium-bold'>USP2</span>
                    </div>
                    <div className='flex gap-5  items-center'>
                        <FontAwesomeIcon icon={faTruck} />
                        <span className='text-medium-bold'>USP3</span>
                    </div>
                    <div className='flex gap-5  items-center'>
                        <FontAwesomeIcon icon={faTruck} />
                        <span className='text-medium-bold'>USP4</span>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Usp
