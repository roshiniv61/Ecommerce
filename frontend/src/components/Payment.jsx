
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Visa from '../assets/Visa.png';
import Paypal from '../assets/paypal.png';
import Gpay from '../assets/Gpay.png';
import Stripe from '../assets/stripe.png';
import Phonepay from '../assets/phonepay.jpeg';

const paymentLogos = {
  paypal: Paypal,
  phonepe: Phonepay,
  stripe: Stripe,
  Gpay: Gpay,
  Visa: Visa
};

const initialValues = {
  paymentMethod: '',
  onlineMethod: '',
  billingAddress: ''
};

const PaymentSchema = Yup.object().shape({
  paymentMethod: Yup.string().required('Required'),
  onlineMethod: Yup.string().required('Required'),
  //    { is: 'online', then: Yup.string().required('Required when selecting Online'), otherwise: Yup.string().nullable() }),
  billingAddress: Yup.string().required('Required'),
});

const handleSubmit = (values) => {
  console.log('Form data', values);
  alert(values)
  // Handle form submission here
};

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState('');

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={PaymentSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form>
          <div className='form-control mt-[60px]'>
            <label className="text-medium-bold mb-5">Payment Method</label>
            <div role="group" aria-labelledby="payment-method-group">
              <div className='flex gap-5 items-start'>
                <Field
                  className="mt-2"
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  onClick={() => {
                    setSelectedMethod('card');
                    setFieldValue('onlineMethod', '');
                  }}
                />
                <label className="text-medium-bold">Card</label>
              </div>

              <div className='flex gap-5 items-start'>
                <Field
                  className="mt-2"
                  type="radio"
                  name="paymentMethod"
                  value="online"
                  onClick={() => setSelectedMethod('online')}
                />
                <label className="text-medium-bold">Online</label>
              </div>

               {selectedMethod === 'online' && (
                <div className='flex flex-col mt-2'>
                  {Object.entries(paymentLogos).map(([method, logo]) => (
                    <div key={method} className='ml-9 flex items-center gap-3'>
                      <Field
                        type="radio"
                        name="onlineMethod"
                        value={method}
                        id={method}
                      />
                      <label htmlFor={method} className="flex items-center gap-2">
                        {method.charAt(0).toUpperCase() + method.slice(1)}
                      </label>
                    </div>
                  ))}
                  <ErrorMessage name="onlineMethod" component="div" className="text-red-600" />
                </div>
              )} 

              <div className='flex gap-5 items-start'>
                <Field
                  className="mt-2"
                  type="radio"
                  name="paymentMethod"
                  value="banktransfer"
                  onClick={() => {
                    setSelectedMethod('banktransfer');
                    setFieldValue('onlineMethod', '');
                  }}
                />
                <label className="text-medium-bold">Bank Transfer</label>
              </div>

              <ErrorMessage name="paymentMethod" component="div" className="text-red-600" />
            </div>
          </div>

          <div className='form-control mt-[60px]'>
            <label className="text-medium-bold mb-5">Billing Address</label>
            <div role="group" aria-labelledby="delivery-method-group">
              <div className='flex gap-5 items-start'>
                <Field className="mt-2" type="radio" name="billingAddress" value="same as delivery address" />
                <label className="text-medium-bold">Same as delivery address <br /></label>
              </div>
              <div className='flex gap-5 items-start'>
                <Field className="mt-2" type="radio" name="billingAddress" value="use different address" />
                <label className="text-medium-bold">Use different address <br /></label>
              </div>
              <ErrorMessage name="billingAddress" component="div" className="text-red-600" />
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} className="mt-4 bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Payment;
