import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import imageLogin from '../assets/images/imageLogin.jpg';
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';

const LogIn = () => {
    const [isShow, setIsShow] = useState(false)
    const handleShowPassword = () => {
        if (isShow) setIsShow(false)
        else setIsShow(true)
    }
    return (
        <div className='login'>
            <div className='login__center'>
                <div className='login-close'>
                    <i className="fa-sharp fa-solid fa-xmark"></i>
                </div>
                <div className='login__img'>
                    <img src={imageLogin} alt="" />
                </div>
                <div className='login__form'>
                    <Formik
                        initialValues={{
                            username: '',
                            password: ''
                        }}
                        validationSchema={
                            Yup.object({
                                username: Yup.string()
                                    .required("Required!"),
                                password: Yup.string()
                                    .required("Required!")
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
                                <img src={logo} alt="" />
                                <br /><br /><br /> <br />
                                <div className='login__form-group'>
                                    <label htmlFor="username">Username</label> <br />
                                    <div className="login-inp">
                                        <i className="fa-solid fa-user"></i>
                                        <Field
                                            type="text"
                                            name="username"
                                            className="field"
                                            placeholder='Nhập username của bạn...'
                                        />
                                    </div>
                                    <div className='err-message'>
                                        <ErrorMessage name='username'></ErrorMessage>
                                    </div>
                                </div>
                                <div className='login__form-group'>
                                    <label htmlFor="password">Password</label> <br />
                                    <div className="login-inp">
                                        <i className="fa-solid fa-lock"></i>
                                        <Field
                                            type={isShow ? "text" : "password"}
                                            name="password"
                                            className="field"
                                            placeholder='Nhập password của bạn...'
                                        />
                                        <i onClick={handleShowPassword} className={`fa-sharp fa-solid ${isShow ? 'fa-eye' : 'fa-eye-slash'} `}></i>
                                    </div>
                                    <p>Forgot password?</p>
                                    <div className='err-message'>
                                        <ErrorMessage name='password'></ErrorMessage>
                                    </div>
                                </div>
                                <button className='login-btn'>Login</button>
                            </form>
                        )}
                    </Formik>
                    <h4>Need an account? <span>Sign up</span></h4>
                </div>
            </div>
        </div>
    );
};

export default LogIn;