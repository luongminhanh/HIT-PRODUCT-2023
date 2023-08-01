import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
//import imageLogin from '../assets/images/imageLogin.jpg';
import img from '../assets/images/loginImage.png';
import { Link, useNavigate } from 'react-router-dom';

const LogIn = () => {
    const [isShow, setIsShow] = useState(false)
    const handleShowPassword = () => {
        if (isShow) setIsShow(false)
        else setIsShow(true)
    }
    const navigate = useNavigate();
    return (
        <div className='login'>
            <div className='login__center'>
                <div className='login-close' onClick={() => navigate('/')}>
                    <i className="fa-sharp fa-solid fa-xmark"></i>
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
                                <div className="img">
                                    <img src={img} alt="" />
                                </div>
                                <h1>LOGIN</h1>
                                <div className='login__form-group'>
                                    <label htmlFor="username">Username/Gmail</label> <br />
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
                                </div> <br />
                                <div className='login__form-group'>
                                    <label htmlFor="password">Password</label> <br />
                                    <div className="login-inp login-pass">
                                        <div>
                                            <Field
                                                type={isShow ? "text" : "password"}
                                                name="password"
                                                className="field"
                                            />
                                        </div>
                                        <i onClick={handleShowPassword} className={`fa-sharp fa-solid ${isShow ? 'fa-eye' : 'fa-eye-slash'} `}></i>
                                    </div>
                                    <p >Forgot password?</p>
                                    <div className='err-message'>
                                        <ErrorMessage name='password'></ErrorMessage>
                                    </div>
                                </div>
                                <button className='login-btn'>Login</button>
                            </form>
                        )}
                    </Formik>
                    <h4>Need an account? <span onClick={() => navigate('/signup')}>Sign up</span></h4>
                </div>
            </div>
        </div>
    );
};

export default LogIn;