import logo from '../assets/images/logo.png';
import mode from '../assets/images/brightness.png';
import '../assets/scss/components/Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className='header-left'>
                <img src={logo} alt="logo" />
            </div>
            <div className='header-right'>
                <div className='header-right-search'>
                    <i className="fas fa-search"></i>
                </div>
                <div className='header-right-cart'>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <div className='header-right-login'>
                    <button className=''>Đăng nhập</button>
                </div>
                <div className='header-right-mode'>
                    <img src={mode} />
                </div>
            </div>
        </div>
    )
}

export default Header