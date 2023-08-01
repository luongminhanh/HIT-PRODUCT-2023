import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import img from '../assets/images/loginImage.png';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <div className='login'>
            <div className='login__center'>
                <div className='login-close'>
                    <i className="fa-sharp fa-solid fa-xmark"></i>
                </div>
                <div className='login__form'>
                    <Formik
                        initialValues={{
                            username: '',
                            email: ''
                        }}
                        validationSchema={
                            Yup.object({
                                username: Yup.string()
                                    .required("Required!"),
                                email: Yup.string()
                                    .required("Required!")
                                    .email('This is not an email')
                            })
                        }
                    >
                        {({
                            values,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                            <form action="" onSubmit={handleSubmit}>
                                <div className="img">
                                    <img src={img} alt="" />
                                </div>
                                <h1 style={{ fontSize: '32px' }}>Forgot Password</h1>
                                <div className='login__form-group'>
                                    <label htmlFor="username">Username</label> <br />
                                    <div className="login-inp">
                                        <Field
                                            type="text"
                                            name="username"
                                            className="field"
                                        />
                                    </div>
                                    <div className='err-message'>
                                        <ErrorMessage name='username'></ErrorMessage>
                                    </div>
                                </div>
                                <div className='login__form-group' style={{ marginTop: 36 }}>
                                    <label htmlFor="email">Email</label> <br />
                                    <div className="login-inp login-pass">
                                        <div>
                                            <Field
                                                name="email"
                                                className="field"
                                            />
                                        </div>
                                    </div>
                                    <div className='err-message'>
                                        <ErrorMessage name='email'></ErrorMessage>
                                    </div>
                                </div> <br />
                                <button className='login-btn'>Submit</button>
                                <br /><br /> <br />
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;