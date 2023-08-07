import React from 'react';
import star from '../assets/images/star.png';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getDetailProducts, postAddToCart } from '../store/apiRequest';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../store/countItemsOfCart';
import { addToCart } from '../store/cartSlice';


const HorizontalCard = ({
    id,
    image,
    productName,
    address,
    price }) => {

    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const fetchDetailProduct = async () => {
        const res = await getDetailProducts(id);
        if (res && res.data && res.data.data) {
            setProduct(res.data.data);
        }
    }
    const handleClickCardProduct = async (id) => {
        navigate(`/product/${id}`);
        window.scrollTo(0, 0);
        const res = await fetchDetailProduct(id);
        console.log(res);
    }

    const handleAddToCart = async () => {
        dispatch(addToCart(product));
        const res = await postAddToCart(id, 1);
        console.log(res);
    }

    useEffect(() => {
        fetchDetailProduct(id);
    }, [product.productId])
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
                        <Button className="orderBtn" text={<i className='fa-solid fa-cart-shopping' />} onClick={() => handleAddToCart()} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HorizontalCard;