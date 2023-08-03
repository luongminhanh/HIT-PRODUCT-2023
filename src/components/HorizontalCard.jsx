import React from 'react';
import star from '../assets/images/star.png';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getDetailProducts } from '../store/apiRequest';
import { useEffect } from 'react';


const HorizontalCard = ({ 
    id, 
    image, 
    productName, 
    address,
    price }) => {

    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const fetchDetailProduct = async () => {
        const res = await getDetailProducts(id);
        if (res && res.data && res.data.data) {
            setProduct(res.data.data);
        }
    }
    const handleClickCardProduct = (id) => {
        navigate(`/product/${id}`)
      }
      useEffect(() => {
        fetchDetailProduct(); 
        console.log("id: ", product);
      }, [product.productName])

    return (
        <div className='horizontal-card' onClick={() => handleClickCardProduct(id)}>
            <div>
                <div className="horizontal-card-img">
                    <img src={product.productImageUrl} alt="" />
                </div>
                <div className="horizontal-card-content">
                    <div>
                        <span>{product.productName}</span>
                        <div className='card-icon'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <p>{product.shopAddress}</p>
                        <h5>{product.productPrice}VND</h5>
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