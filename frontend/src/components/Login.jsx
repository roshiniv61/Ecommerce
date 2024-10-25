import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleSubmit = (values) => {
    console.log('Form data', values);
    // Handle form submission here (e.g., send data to an API)
  };

  return (
    <div className='login-wrapper mb-[72px]'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className='form-control'>
              <label htmlFor="email">Email Address</label>
              <Field type="email" id="email" placeholder="Email Address" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div className='form-control'>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" placeholder="Password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div className='flex justify-between items-center mt-[14px]'>
              <div className='text-small-bold '>Forgot Password</div>
              <button className="green-button " type="submit">Login</button>
            </div>

          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;

