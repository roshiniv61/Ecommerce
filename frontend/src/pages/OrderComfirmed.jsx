import React from 'react'

const OrderComfirmed = () => {
  return (
    <div>
      <section className='order-comfirmed'>
        <div className='container mx-auto px-4'>
          <div className='text-center'>
            <h3 className='mb-9'>
              Order Comfirmed
            </h3>
            <p className='mb-9'>
              Thank you for your order.
            </p>
            <div className="grid grid-cols-12 p-5 mb-12 rounded-xl border-2 border-green-500">
              <div className="md:col-span-6 col-span-12">
                Reference Number
              </div>
              <div className="md:col-span-6 col-span-12">
                <p className='flex justify-center  '>
                  0000000000000000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OrderComfirmed
