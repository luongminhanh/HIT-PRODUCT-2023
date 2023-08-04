import React from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import bg_1_1 from '../../assets/images/bg_1_1_2.png';


const Banner = () => {
    const navigate = useNavigate();
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        console.log("Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude);
    }
    return (
        <div className="home-banner">
            <div>
                < div className="home-banner-content">
                    <h2 className='line'>Welcome to HitFood </h2>
                    <h1 className='line'>Hôm nay, bạn muốn ăn gì?</h1>
                    <div className="search line" >
                        <div className='search-position' >
                            <Button text={<i className="fa-solid fa-crosshairs" onClick={() => getLocation()}></i>}></Button>
                            <input type="text" placeholder='Tìm kiếm theo tên món ăn hoặc vị trí...' />
                        </div>
                        <Button text={<i className='fas fa-search' />} onClick={() => navigate('/search')}></Button>
                    </div>
                </div>
                <div>
                    <img src={bg_1_1} alt="" className="fish_fry " />
                </div>
            </div>
        </div>
    );
};

export default Banner;