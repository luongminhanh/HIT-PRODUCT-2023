import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../assets/scss/components/Header.scss';
import Button from './Button';
import Icon from './Icon';
import userImage from '../assets/images/user.png';
// import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProductInCart } from '../store/apiRequest';


const Header = () => {
    const [numberOfProductsInCart, setNumberOfProductInCart] = useState(0);
    const navigate = useNavigate();
    const accessToken = localStorage.getItem("accessToken");
    const handleLogout = () => {
        localStorage.clear();
        navigate("/")
    }
    // const count = useSelector((state) => state.counter.value);
    const fetchNumberOfProductsInCart = async () => {
        const res = await getProductInCart(localStorage.getItem("cartId"));
        setNumberOfProductInCart(res.data.data.length);
    }
    useEffect(() => {
        fetchNumberOfProductsInCart();
    }, [numberOfProductsInCart])
    return (
        <>
            {
                accessToken ?
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
                                    <div className='number-of-items-in-cart'>{numberOfProductsInCart}</div>
                                    <Button className="pad0" onClick={() => navigate('/cart')} text={<Icon className='fa-solid fa-cart-shopping' />} />
                                </div>
                                <div className='header-right-login'>
                                    <div className="img-user">
                                        <div >
                                            <img src={userImage} alt="" />
                                            <p>trang123</p>
                                        </div>
                                        <div className="list-menu">
                                            <Button className="list-menu-button" onClick={() => navigate('/infor')} text='Tài Khoản Của Tôi'></Button>
                                            <Button className="list-menu-button" onClick={() => navigate('/orderhistory')} text='Đơn Mua'></Button> <hr className='list-menu-hr' />
                                            <Button className="list-menu-button" onClick={handleLogout} text='Đăng Xuất'></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
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
                                        className='header-right-login-btn'

                                    />
                                </div>
                            </div>
                        </div>
                    </div>
            }
            <div className='bufferZone'></div>
        </>
    )
}

export default Header