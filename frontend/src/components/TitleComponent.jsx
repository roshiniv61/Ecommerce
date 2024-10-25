import React from 'react'

const TitleComponent = (props) => {
    return (
        <section className={`title-component ${props?.Class ? props?.Class : ""}`}>
            <div className='container mx-auto px-4'>
                <div className='wrapper'>
                    {props?.title && <h3 className='title'>{props?.title}</h3>}
                    {props?.description && 
                    <p className='description text-regular-normal'>{props?.description}</p>}
                    {props?.button && <div className='green-button'>{props?.button}</div>}
                </div>
            </div>
        </section>
    )
}

export default TitleComponent
