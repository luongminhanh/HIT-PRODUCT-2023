import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../assets/scss/components/Header.scss';
import Button from './Button';
import Icon from './Icon';


const Header = () => {
    const handleClickLogin = () => {
        console.log('click đăng nhập');
    }
    const navigate = useNavigate();

    return (
        <>
            <div className="header-container">
                <div className="header">
                    <div title='Nhấn vào để quay về trang home' className='header-left' onClick={() => navigate('/')}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='header-right'>
                        <div className='header-right-search'>
                            <Button className="pad0" text={<Icon className='fas fa-search' />} />
                        </div>
                        <div className='header-right-cart'>
                            <Button className="pad0" onClick={() => navigate('/cart')} text={<Icon className='fa-solid fa-cart-shopping' />} />
                        </div>
                        <div className='header-right-login'>
                            <Button
                                text='Login'
                                onClick={() => navigate('/login')}

                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bufferZone'></div>
        </>
    )
}

export default Header