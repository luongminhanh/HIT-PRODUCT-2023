import { useState } from 'react';
import img from '../assets/images/imageSignUp.png';
import facebook from '../assets/images/facebook.png';
import google from '../assets/images/google.png';
import instagram from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.png';
import '../assets/scss/components/Register.scss'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../store/apiRequest';

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      username: username, 
      password: password 
    };
    registerUser(newUser, dispatch, navigate);
  }
  return (
    <div className='register'>
      <div className='register__img'>
        <img src={img} alt="mon an"></img>
      </div>
      <div className='register__form'>
        <h1>ĐĂNG KÝ TÀI KHOẢN</h1>
        <form onSubmit={handleRegister}>
          <span>Tên đăng nhập</span><br/>
          <input 
          type="text" 
          onChange={(e) => setUsername(e.target.value)}        
          />
          <br/>
          <span>Mật khẩu</span><br/>
          <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          />
          <br/>
          <button>Đăng ký</button><br/>
        </form>
        <br/>
        <span className='__login'>Đã có tài khoản? <a href="/login">Đăng nhập</a></span>
        <br/>
        <span>Hoặc đăng ký bằng</span>
        <div className='register__form--social'>
          <img src={instagram} alt=""></img>
          <img src={facebook} alt=""></img>
          <img src={google} alt=""></img>
          <img src={twitter} alt=""></img>
        </div>
      </div>
    </div>
  )
}

export default Register;