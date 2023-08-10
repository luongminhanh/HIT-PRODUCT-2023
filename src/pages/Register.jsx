import facebook from '../assets/images/facebook.png';
import google from '../assets/images/google.png';
import instagram from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.png';
import '../assets/scss/components/Register.scss'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../components/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Alert from '../components/Alert';

const Schema = Yup.object({
  password: Yup.string()
    .matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, "Password tối thiểu 6 kí tự, bắt buộc phải chứa các kí tự chữ cái và chữ số ")
    .required("Chưa nhập mật khẩu"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Mật khẩu chưa khớp')
    .required("Chưa nhập xác nhận mật khẩu"),
  username: Yup.string()
    .required("Chưa nhập tên đăng nhập")
    .matches(/^[a-z][a-z0-9]{3,15}$/, "Username tối thiểu 4 kí tự, tối đa 16 kí tự, chỉ được phép chứa các kí tự chữ cái, chữ số, số không được đứng đầu, không được viết hoa"),
  email: Yup.string().email('Email không đúng').required('Chưa nhập email'),
});

const Register = () => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isShowPassWord, setIsShowPassWord] = useState(false)
  const [isShowReatPassword, setIsShowReatPassword] = useState(false)
  const handleShowPassword = () => {
    if (isShowPassWord) setIsShowPassWord(false)
    else setIsShowPassWord(true)
  }
  const handleShowRepeatPassword = () => {
    if (isShowReatPassword) setIsShowReatPassword(false)
    else setIsShowReatPassword(true)
  }
  return (
    <div className="register">
      <div className='register__form'>
        <div className='login-close' onClick={() => navigate('/login')}>
          <i className="fa-sharp fa-solid fa-xmark"></i>
        </div>
        <div className='register__form--title'>
          <h1>SIGNUP</h1>
        </div>
        <Formik
          initialValues={{
            username: '',
            password: '',
            repeatPassword: '',
            email: '',
          }}
          validationSchema={Schema}
          onSubmit={async (values) => {

            try {
              await axios.post("http://207.148.118.106:8286/api/v1/auth/register", values)
              setIsSuccess(true);
              setIsError(false);
              let loginUser = {
                username: values.username,
                password: values.password
              }
              const result = await axios.post('http://207.148.118.106:8286/api/v1/auth/login', loginUser);
              localStorage.clear();
              localStorage.setItem("accessToken", result.data.data.accessToken);
              localStorage.setItem("username", loginUser.username)
              setTimeout(() => {
                navigate('/')
              }, 2000)
            } catch (error) {
              console.log(error);
              setIsError(true);
              setTimeout(() => {
                setIsError(false);
              }, 8000)
            }

          }}
        >
          {({ errors }) => {
            return <Form>
              <div>
                <span>Username</span><br />
                <Field
                  id="username"
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
                  id="email"
                  type="text"
                  name="email"

                />
                <div className='register-error'>
                  <ErrorMessage name="email"></ErrorMessage>
                </div>

              </div>

              <div >
                <div className='password-group'>
                  <div>
                    <span>Password</span><br />
                    <Field
                      id="password"
                      type={isShowPassWord ? "text" : "password"}
                      name="password"
                      autoComplete="new-password"
                    />
                  </div>
                  <i onClick={handleShowPassword} className={`fa-sharp fa-solid ${isShowPassWord ? 'fa-eye' : 'fa-eye-slash'} `}></i>
                </div>
                <div className='register-error'>
                  <ErrorMessage name="password"></ErrorMessage>
                </div>
              </div>
              <div >
                <div className='password-group'>
                  <div>
                    <span>Confirm password</span><br />
                    <Field
                      id="repeatPassword"
                      type={isShowReatPassword ? "text" : "password"}
                      name="repeatPassword"
                      autoComplete="new-password"
                    />
                  </div>
                  <i onClick={handleShowRepeatPassword} className={`fa-sharp fa-solid ${isShowReatPassword ? 'fa-eye' : 'fa-eye-slash'} `}></i>
                </div>

                <div className='register-error'>

                  <ErrorMessage name="repeatPassword"></ErrorMessage>
                </div>

              </div>
              <br />
              <button type='submit'>Submit</button>
              <br />
            </Form>
          }}

        </Formik>
        <br />
        <div className='--login'>Already a member? <Button onClick={() => navigate("/login")} className='btn-login' text='Login'></Button></div>
      </div>
      {
        isError &&
        <Alert title='Lỗi!' describe='Đăng ký không thành công, hãy đảm bảo rằng gmail của bạn chưa đăng ký tài khoản bên chúng tôi.' className='error'></Alert>
      }
      {
        isSuccess &&
        <Alert title='Thành công!' describe='Tài khoản của bạn đã tạo thành công' className='success'></Alert>
      }
    </div >
  )
}

export default Register;