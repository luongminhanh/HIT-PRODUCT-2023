import facebook from '../assets/images/facebook.png';
import google from '../assets/images/google.png';
import instagram from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.png';
import '../assets/scss/components/Register.scss'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../components/Button';
import axios from 'axios';

const Schema = Yup.object({
  password: Yup.string().required("Chưa nhập nhập mật khẩu"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Mật khẩu chưa khớp'),
  username: Yup.string().required("Chưa nhập tên đăng nhập"),
  email: Yup.string().email('Email không đúng').required('Chưa nhập email'),
});

const Register = () => {
  return (
    <div className="register">
      <div className='register__form'>
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
            // const res = axios.post("http://localhost:8080/api/v1/auth/register", {
            //   username: values.username,
            //   password: values.password,
            //   repeatPassword: values.repeatPassword,
            //   email: values.email //Second param will be your body
            // },
            //   {
            //     headers: {
            //       Authorization: ``,
            //       'Content-Type': 'application/json'
            //     }
            //   })
            // console.log(values)
            // console.log(res);
            // const params = JSON.stringify({
            //   "username": values.username,
            //   "password": values.password,
            //   "repeatPassword": values.repeatPassword,
            //   "email": values.email

            // });
            axios.post("http://localhost:8080/api/v1/auth/register", 
              values
            )
              .then(response => {
                console.log(response);
              })
              .catch(error => {
                console.log(error)
              })
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
                  {errors.username ?
                    <span className='register-error' style={{ color: "red" }}>
                      {errors.username}
                      <br />
                    </span>
                    :
                    ""
                  }
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
                  {errors.email ?
                    <span className='register-error' style={{ color: "red" }}>
                      {errors.email}
                      <br />
                    </span>
                    :
                    ""
                  }
                </div>

              </div>

              <div>
                <span>Password</span><br />
                <Field
                  id="password"
                  type="password"
                  name="password"
                  autoComplete="new-password"
                />
                <div className='register-error'>
                  {errors.password ? <span className='register-error' style={{ color: "red" }}>
                    {errors.password}
                    <br />
                  </span> : ""}
                </div>

              </div>

              <div>
                <span>Confirm password</span><br />
                <Field
                  id="repeatPassword"
                  type="password"
                  name="repeatPassword"
                  autoComplete="new-password"
                />
                <div className='register-error'>
                  {errors.repeatPassword ?
                    <span className='register-error' style={{ color: "red" }}>
                      {errors.repeatPassword}
                      <br />
                    </span>
                    :
                    ""
                  }
                </div>

              </div>
              <br />
              <button type='submit'>Submit</button>
              <br />
            </Form>
          }}

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