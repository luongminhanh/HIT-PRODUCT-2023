import logo from '../assets/images/logo.png';
import mode from '../assets/images/brightness.png';
import '../assets/scss/components/Header.scss';
import Button from './Button';
import Icon from './Icon';

const Header = () => {
    const handleClickLogin = () => {
        console.log('click đăng nhập');
    }
    return (
        <div className="header">
            <div className='header-left'>
                <img src={logo} alt="logo" />
            </div>
            <div className='header-right'>
                <div className='header-right-search'>
                    <Icon className='fas fa-search' />
                </div>
                <div className='header-right-cart'>
                    <Icon className='fa-solid fa-cart-shopping' />
                </div>
                <div className='header-right-login'>
                    <Button
                        text='Đăng nhập'
                        onClick={handleClickLogin}
                    />
                </div>
                <div className='header-right-mode'>
                    <Button 
                    text={<img src={mode}/>} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Header