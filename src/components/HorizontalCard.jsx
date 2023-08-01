import React from 'react';
import star from '../assets/images/star.png';
import Button from './Button';


const HorizontalCard = ({ image, productName, price }) => {
    return (
        <div className='horizontal-card'>
            <div>
                <div className="horizontal-card-img">
                    <img src={image} alt="" />
                </div>
                <div className="horizontal-card-content">
                    <div>
                        <h4>{productName}</h4>
                        <div className='card-icon'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <p>Số 298, đường Hai Bà Trưng</p>
                        <h5>{price}VND</h5>
                    </div>
                    <div>
                        <Button className="orderBtn" text={<i className='fa-solid fa-cart-shopping' />} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HorizontalCard;