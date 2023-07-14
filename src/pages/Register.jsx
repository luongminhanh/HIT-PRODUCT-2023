import { useState } from 'react';
import img from '../assets/images/imageSignUp.png';
import facebook from '../assets/images/facebook.png';
import google from '../assets/images/google.png';
import instagram from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.png';
import logo from '../assets/images/logo.png';
import '../assets/scss/components/Register.scss'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../store/apiRequest';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

const Schema = Yup.object().shape({
  password: Yup.string().required("Chưa nhập nhập mật khẩu"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Mật khẩu chưa khớp'),
  username: Yup.string().required("Chưa nhập tên đăng nhập"),
  email: Yup.string().email('Email không đúng').required('Chưa nhập email'),
});

const Register = () => {
  const [type, setType] = useState("password");

  return (
    // <div className='register'>
    //   <div className='register__img'>
    //     <img src={img} alt="mon an"></img>
    //   </div>
    //   <div className='register__form'>
    //     <div className='register__form--title'>
    //       <h1>Đăng ký</h1>
    //       <div className='register__form--title--logo'>
    //         <img src={logo}></img>
    //       </div>
    //     </div>
    //     <form onSubmit={handleRegister}>
    //       <span>Tên đăng nhập</span><br />
    //       <input
    //         type="text"
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //       <br />
    //       {username.length<=6 ? <span className="register-error">Tên đăng nhập phải lớn hơn 6 ký tự</span> : ""}
    //       <br />
    //       <span>Gmail</span><br />
    //       <input
    //         type="text"
    //         onChange={(e) => setGmail(e.target.value)}
    //       />
    //       <br />
    //       <span>Mật khẩu</span><br />
    //       <input
    //         type="password"
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //       <br />
    //       <span>Nhập lại mật khẩu</span><br />
    //       <input
    //         type="password"
    //         onChange={(e) => setPassword2(e.target.value)}
    //       />
    //       <br />
    //       <button>Đăng ký</button><br />
    //     </form>
    //     <br />
    //     <span className='__login'>Đã có tài khoản? <a href="/login">Đăng nhập</a></span>
    //     <br />
    //     <span>Hoặc đăng ký bằng</span>
    //     <div className='register__form--social'>
    //       <img src={instagram} alt=""></img>
    //       <img src={facebook} alt=""></img>
    //       <img src={google} alt=""></img>
    //       <img src={twitter} alt=""></img>
    //     </div>
    //   </div>
    // </div>
    <div className="register">
      <div className='register__img'>
        <img src={img} alt="mon an"></img>
      </div>
      <div className='register__form'>
        <div className='register__form--title'>
          <h1>Đăng ký</h1>
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
          {({ values, errors, handleChange, handleSubmit }) => {
            return (
              <>
                <span>Tên đăng nhập</span><br />
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  value={values.username}
                />
                <br />
                {errors.username ?
                  <span className='register-error' style={{ color: "red" }}>
                    {errors.username}
                    <br />
                  </span>
                  :
                  ""
                }

                <span>Gmail</span><br />
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
                <br />
                {errors.email ?
                  <span className='register-error' style={{ color: "red" }}>
                    {errors.email}
                    <br />
                  </span>
                  :
                  ""
                }
                <span>Mật khẩu</span><br />
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                />      
                <br />
                {errors.password ? <span className='register-error' style={{ color: "red" }}>
                  {errors.password}
                  <br />
                </span> : ""}

                <span>Nhập lại mật khẩu</span><br />
                <input
                  type="password"
                  name="passwordConfirm"
                  onChange={handleChange}
                  value={values.passwordConfirm}
                />
                <br />
                {errors.passwordConfirm ?
                  <span className='register-error' style={{ color: "red" }}>
                    {errors.passwordConfirm}
                    <br />
                  </span>
                  :
                  ""
                }
                <br />
                <button onClick={handleSubmit}>Đăng ký</button><br />
              </>
            )
          }}

        </Formik>
        <br />
        <span className='__login'>Đã có tài khoản? <a href="/login">Đăng nhập</a></span>
        <br />
        <span>Hoặc đăng ký bằng</span>
        <div className='register__form--social'>
          <img src={instagram} alt=""></img>
          <img src={facebook} alt=""></img>
          <img src={google} alt=""></img>
          <img src={twitter} alt=""></img>
        </div>
      </div>
    </div >
  )
}

export default Register;