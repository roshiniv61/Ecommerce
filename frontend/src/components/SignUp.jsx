import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
    const initialValues = {
        companyname: '',
        firstname: '',
        email: '',
        password: '',
        confirmPassword: '',

    };

    const validationSchema = Yup.object({
        companyname: Yup.string()
            .matches(/^[A-Za-z]+$/, 'Invalid first name format')
            .required('company name is required'),
        firstname: Yup.string()
            .matches(/^[A-Za-z]+$/, 'Invalid first name format')
            .required('First name is required'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
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
                            <label htmlFor="companyname">Company Name</label>
                            <Field type="text" id="companyname" placeholder="Company Name" name="companyname" />
                            <ErrorMessage name="companyname" component="div" />
                        </div>
                        <div className='form-control'>
                            <label htmlFor="firstname">First Name</label>
                            <Field type="text" id="firstname" placeholder="First Name" name="firstname" />
                            <ErrorMessage name="firstname" component="div" />
                        </div>
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
                        <div className='form-control'>
                            <label>Confirm Password</label>
                            <Field type="password" placeholder="Confirm Password"  name="confirmPassword" />
                            <ErrorMessage name="confirmPassword"  component="div" />
                        </div>
                        <div className='flex justify-between items-center mt-[14px]'>
                            <div className='text-small-bold'>Forgot Password</div>
                            <button className="green-button" type="submit">Login</button>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SignUp;

