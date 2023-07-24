import React from 'react';
import Button from '../Button';
import tomato from '/src/assets/images/tomato.png';
import leaves from '/src/assets/images/leaves.png';
import leaves_2 from '/src/assets/images/leaves_2.png';
import squid from '/src/assets/images/fried-squid.png';
import onion from '/src/assets/images/onion.png';
import smile from '/src/assets/images/smile.png'


const Banner = () => {
    return (
        <div className="home-banner">
            <div className="home-container">
                < div className="home-banner-content">
                    <div className='contentIcon line'>
                        <h2>Xin chào </h2>
                        <img src={smile} alt="" />
                    </div>
                    <div className='contentIcon line'>
                        <h1>Hôm nay, </h1>
                    </div>
                    <h1 className='line'>bạn muốn ăn gì?</h1>
                    <div className="search line" >
                        <input type="text" placeholder='Tìm kiếm...' />
                        <i className='fas fa-search' />
                    </div>
                    <Button className="searchBtn line" text={"Search"} />
                </div>
                <div>
                    <img src={tomato} className='tomatoImage' alt="" />
                    <img src={leaves} className='leavesImage' alt="" />
                    <img src={leaves_2} className='leaves_2_Image' alt="" />
                    <img src={squid} alt="" className="squidImage" />
                    <img src={onion} alt="" className="onionImage" />
                </div>
            </div>
        </div>
    );
};

export default Banner;