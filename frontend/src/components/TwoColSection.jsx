import React from 'react'
import twocolimg from "../assets/twocolimg.png"

const TwoColSection = () => {
  return (
    <section className='two-col-section'>
        <div className='container mx-auto px-4'>
            <div className='md:flex gap-5 justify-center'>
                <div className='img-wrapper'>
                <img src={twocolimg} alt="" />
                </div>
                <div className='content-wrapper'>
                    <h2 className='title'>
                    Lorem ipsum dolor sit amet,  adipis
                    </h2>
                    <p className='description'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </p>
                    <div className='white-button'>
                        Button
                    </div>

                </div>
            </div>
        </div>      
    </section>
  )
}

export default TwoColSection
