import React from 'react'
import bgImage from "../assets/banner-img.png"
import bannerBg from "../assets/banner-bg.png"


const bannerData = {
    title: "Amazing Deals,Amazing Savings",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.",
    buttonName: "Button",
    bannerImg: bgImage
}

const Banner = () => {
    return (
        <section className='hero-banner'>
            <div className='container mx-auto'>
                <div className='lg:flex justify-evenly'>
                    <div className='content-wrapper'>
                        <h1 className='Desktop-H2'>{bannerData?.title}</h1>
                        <p>{bannerData?.description}</p>
                        <div>
                            <button className='white-button text-regular-normal'>
                                {bannerData?.buttonName}
                            </button>
                        </div>
                    </div>
                    <div className="image-wrapper" style={{
                        backgroundImage: `url(${bannerBg})`,
                        backgroundRepeat: "no-repeat"
                    }}>
                        <img src={bannerData?.bannerImg} alt="bg-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
