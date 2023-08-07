import React, { useEffect, useState } from 'react'
import star from '../assets/images/star.png'
import money from '../assets/images/money.png'
import Button from './Button'
import { getDetailProducts, postAddToCart } from '../store/apiRequest'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { increment } from '../store/countItemsOfCart'
import { addToCart } from '../store/cartSlice'


const CardSearch = ({
  id,
  image,
  productName,
  shopAddress,
  price
}) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const fetchDetailProduct = async (id) => {
    const res = await getDetailProducts(id);
    if (res && res.data && res.data.data) {
      setProduct(res.data.data);
    }
  }
  const handleAddToCart = async () => {
    dispatch(increment());
    dispatch(addToCart(product));
    const res = await postAddToCart(id, 1);
    console.log(res);
  }
  const handleClickCardProduct = async (id) => {
    navigate(`/product/${id}`);
    window.scrollTo(0, 0);
    const res = await fetchDetailProduct(id); 
    console.log(res);
  }
  useEffect(() => {
    fetchDetailProduct(id); 
  }, [product.productId])

  return (
    <div className='card w-25' onClick={() => handleClickCardProduct(id)}>
      <div className="box">Đang hoạt động</div>
      <div className='imgProduct'>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
      <div className="card-content">
        {/* <div className='card-icon'>
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </div> */}
        <div>
          <span>{productName}</span>
          <p>{shopAddress}</p>
          <div className="productItem">
            <div style={{ display: 'flex', alignItems: 'center ' }}>
              {/* <img src={money} alt="" /> */}
              <h3>{price} VND</h3>
            </div>
            <div>
              <Button className="orderBtn" text={<i className='fa-solid fa-cart-shopping' />} onClick={() => handleAddToCart()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSearch;