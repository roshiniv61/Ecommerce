

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const DeliveryAddress = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    streetLine1: '',
    streetLine2: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    phoneNumber: '',
    shippingMethod: '', // Add shipping method to initial values
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    streetLine1: Yup.string().required('Street Line 1 is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    country: Yup.string().required('Country is required'),
    pincode: Yup.string()
      .matches(/^[0-9]{6}$/, 'Pincode must be 6 digits')
      .required('Pincode is required'),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    shippingMethod: Yup.string().required('Shipping method is required'), // Validate shipping method

  });

  const handleSubmit = (values) => {
    console.log('Form data', values);
    // Handle form submission here (e.g., send data to an API)
  };

  return (
    <div className='registration-wrapper mb-[72px]'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className='form-control'>
              <label htmlFor="firstName">First Name</label>
              <Field type="text" id="firstName" placeholder="First Name" name="firstName" />
              <ErrorMessage name="firstName" component="div" />
            </div>

            <div className='form-control'>
              <label htmlFor="lastName">Last Name</label>
              <Field type="text" id="lastName" placeholder="Last Name" name="lastName" />
              <ErrorMessage name="lastName" component="div" />
            </div>

            <div className='form-control'>
              <label htmlFor="streetLine1">Street Line 1</label>
              <Field type="text" id="streetLine1" placeholder="Street Line 1" name="streetLine1" />
              <ErrorMessage name="streetLine1" component="div" />
            </div>

            <div className='form-control'>
              <label htmlFor="streetLine2">Street Line 2</label>
              <Field type="text" id="streetLine2" placeholder="Street Line 2" name="streetLine2" />
              <ErrorMessage name="streetLine2" component="div" />
            </div>

            <div className='form-control'>
              <label htmlFor="city">City</label>
              <Field type="text" id="city" placeholder="City" name="city" />
              <ErrorMessage name="city" component="div" />
            </div>

            <div className='form-control'>
              <label htmlFor="state">State</label>
              <Field type="text" id="state" placeholder="State" name="state" />
              <ErrorMessage name="state" component="div" />
            </div>

            <div className='form-control'>
              <label htmlFor="country">Country</label>
              <Field type="text" id="country" placeholder="Country" name="country" />
              <ErrorMessage name="country" component="div" />
            </div>

            <div className='form-control'>
              <label htmlFor="pincode">Pincode</label>
              <Field type="text" id="pincode" placeholder="Pincode" name="pincode" />
              <ErrorMessage name="pincode" component="div" />
            </div>

            <div className='form-control'>
              <label htmlFor="phoneNumber">Phone Number</label>
              <Field type="text" id="phoneNumber" placeholder="Phone Number" name="phoneNumber" />
              <ErrorMessage name="phoneNumber" component="div" />
            </div>


            <div className='form-control mt-[60px]'>
              <label className="text-medium-bold  mb-5">Delivery Method</label>
              <div role="group" aria-labelledby="shipping-method-group">
                <div className='flex gap-5 items-start'>
                  <Field className="mt-2" type="radio" name="shippingMethod" value="standard" />
                  <label className="text-medium-bold">Standard Shipping <br />
                  <span className="text-small-normal">
                      Estimated to arrive on: <b>Monday 17 June 2024</b>
                  </span>
                  </label>
                  <p className="price text-medium-bold text-end grow">$2.000</p>

                </div>

                <div className='flex gap-5 items-start'>
                  <Field className="mt-2" type="radio" name="shippingMethod" value="express" />
                  <label className="text-medium-bold"> Express Shipping <br />
                  <span className="text-small-normal">
                      Estimated to arrive on: <b>Monday 17 June 2024</b>
                  </span>
                  </label>
                  <p className="price text-medium-bold text-end grow">$4.00</p>

                </div>

                <div className='flex gap-5 items-start'>
                  <Field className="mt-2" type="radio" name="shippingMethod" value="nextDay" />
                  <label className="text-medium-bold ">Next Day Delivery <br />
                    <span className="text-small-normal">
                      Estimated to arrive on: <b>Monday 17 June 2024</b>
                    </span>
                  </label>
                  <p className="price text-medium-bold text-end grow">$8.00</p>
                </div>
                <ErrorMessage name="shippingMethod" component="div" />
              </div>
            </div>


            <div className='flex justify-end items-center mt-[14px]'>
              <button className="green-button" type="submit">Proceed to Billing Address</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DeliveryAddress;

