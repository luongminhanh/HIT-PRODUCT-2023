import logo from '../assets/images/logo.png';
import '../assets/scss/components/Header.scss';
import Button from './Button';
import Icon from './Icon';


const Header = () => {
    const handleClickLogin = () => {
        console.log('click đăng nhập');
    }

    return (
        <>
            <div className="header-container">
                <div className="header">
                    <div className='header-left'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="header-center">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Menu</a></li>
                            <li><a href="">About us</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className='header-right'>
                        <div className='header-right-search'>
                            <Button className="pad0" text={<Icon className='fas fa-search' />} />
                        </div>
                        <div className='header-right-cart'>
                            <Button className="pad0" text={<Icon className='fa-solid fa-cart-shopping' />} />
                        </div>
                        <div className='header-right-login'>
                            <Button
                                text='Login'
                                onClick={handleClickLogin}
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