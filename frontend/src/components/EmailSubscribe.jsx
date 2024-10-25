import React, { useState } from 'react'
import bgImage from "../assets/email-sub-img.png"
import bannerBg from "../assets/banner-bg.png"


const bannerData = {
    title: "Signup to our newsletter",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    buttonName: "Button",
    bannerImg: bgImage
}
const EmailSubscribe = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(email);
    }
    return (
        <section className='email-subscribe'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-12 wrapper' >
                    <div className='content-wrapper md:col-span-6 col-span-12'>
                        <h1 className='Desktop-H2'>{bannerData?.title}</h1>
                        <p>{bannerData?.description}</p>
                        <div>
                            <form onSubmit={onSubmitHandler} className='flex gap-5'>
                                <div className='form-control'>
                                    <input placeholder="email"
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        required />
                                </div>
                                <button type="submit" className='white-button text-regular-normal'>
                                    {bannerData?.buttonName}
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="image-wrapper md:col-span-6 col-span-12" style={{
                        backgroundImage: `url(${bannerBg})`,
                        backgroundRepeat: "no-repeat"
                    }}>
                        <img src={bannerData?.bannerImg} alt="bg-img" width="100%" height="100%" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EmailSubscribe
