import { useState } from 'react';
import img from '../assets/images/loginImage.png';
import facebook from '../assets/images/facebook.png';
import google from '../assets/images/google.png';
import instagram from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.png';
import logo from '../assets/images/logo.png';
import '../assets/scss/components/Register.scss'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../store/apiRequest';
import { ErrorMessage, Field, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../components/Button';

const Schema = Yup.object({
  password: Yup.string().required("Chưa nhập nhập mật khẩu"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Mật khẩu chưa khớp'),
  username: Yup.string().required("Chưa nhập tên đăng nhập"),
  email: Yup.string().email('Email không đúng').required('Chưa nhập email'),
});

const Register = () => {
  const [type, setType] = useState("password");

  return (
    <div className="register">
      <div className='register__form'>
        {/* <img src={img} alt="mon an"></img> */}
        <div className='register__form--title'>
          <h1>SIGNUP</h1>
        </div>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            passwordConfirm: ""
          }}
          validationSchema={Schema}
          onSubmit={() => { }}
        >
          {({
            values,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form action="" onSubmit={handleSubmit}>
              <div>
                <span>Username</span><br />
                <Field
                  type="text"
                  name="username"
                />
                <div className='register-error' >
                  <ErrorMessage name="username"></ErrorMessage>
                </div>
              </div>

              <div>
                <span>Gmail</span><br />
                <Field
                  type="text"
                  name="email"

                />
                <div className='register-error'>

                  <ErrorMessage name="email"></ErrorMessage>
                </div>

              </div>

              <div>
                <span>Password</span><br />
                <Field
                  type="password"
                  name="password"
                  autoComplete="new-password"
                />
                <div className='register-error'>
                  <ErrorMessage name="password"></ErrorMessage>
                </div>

              </div>

              <div>
                <span>Confirm password</span><br />
                <Field
                  type="password"
                  name="passwordConfirm"
                  autoComplete="new-password"
                />
                <div className='register-error'>

                  <ErrorMessage name="passwordConfirm"></ErrorMessage>
                </div>

              </div>

              <br />
              <Button onClick={handleSubmit} text='Submit' />
              <br />

            </form>
          )}

        </Formik>
        <br />
        <div className='or'><hr />OR<hr /></div>
        <div className='register__form--social'>
          <img src={instagram} alt=""></img>
          <img src={facebook} alt=""></img>
          <img src={google} alt=""></img>
          <img src={twitter} alt=""></img>
        </div>
        <br />
        <div className='--login'>Already a member? <Button className='btn-login' text='LOGIN'></Button></div>
      </div>
    </div >
  )
}

export default Register;