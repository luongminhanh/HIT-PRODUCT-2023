import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import img from '../assets/images/loginImage.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alert from '../components/Alert';
import { useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';
import { api } from '../store/apiRequest';
import { useState } from 'react';

const LogIn = () => {
    const [isShow, setIsShow] = useState(false)
    const handleShowPassword = () => {
        if (isShow) setIsShow(false)
        else setIsShow(true)
    }
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
                        onSubmit={async (values) => {
                            try {
                                const result = await axios.post(`${api}/auth/login`, values);

                                if (result.status == 200) {
                                    setIsError(false)
                                    setIsSuccess(true);
                                    setTimeout(() => {
                                        navigate("/");
                                    }, 2000)
                                    console.log("ok");
                                    localStorage.clear();
                                    dispatch(clearCart());
                                    localStorage.setItem("accessToken", result.data.data.accessToken);
                                    localStorage.setItem("username", values.username);
                                }
                            } catch (error) {
                                setIsError(true);
                                setTimeout(() => {
                                    setIsError(false);
                                }, 8000)
                                setIsSuccess(false);
                            }
                        }}
                    >
                        {({
                            handleSubmit,
                        }) => (
                            <form action="" onSubmit={handleSubmit}>
                                <div className="img">
                                    <img src={img} alt="" />
                                </div>
                                <h1>LOGIN</h1> <br />
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
                                    <p onClick={() => navigate('/forgotpassword')}>Forgot password?</p>
                                    <div className='err-message'>
                                        <ErrorMessage name='password'></ErrorMessage>
                                    </div>
                                </div>
                                <button type="submit" className='login-btn'>Login</button>
                            </form>
                        )}
                    </Formik>
                    <h4>Need an account? <span onClick={() => navigate('/signup')}>Sign up</span></h4>
                </div>
            </div>
            {
                isError &&
                <Alert title='Lỗi!' describe='Sai tên đăng nhập hoặc mật khẩu hoặc bạn chưa đăng ký tài khoản.' className='error'></Alert>
            }
            {
                isSuccess &&
                <Alert title='Thành công!' describe='' className='success'></Alert>
            }
        </div>
    );
};

export default LogIn;