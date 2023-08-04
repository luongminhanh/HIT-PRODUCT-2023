import React, { useEffect, useState } from 'react'
import star from '../assets/images/star.png'
import money from '../assets/images/money.png'
import Button from './Button'
import { getDetailProducts } from '../store/apiRequest'
import { useNavigate } from 'react-router-dom'


const Card = ({
  id,
  image,
  productName,
  address,
  price
}) => {
  
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const fetchDetailProduct = async () => {
    const res = await getDetailProducts(id);
    if (res && res.data && res.data.data) {
      setProduct(res.data.data);
    }
  }
  const handleAddToCart = () => {
    console.log("hello");
  }
  const handleClickCardProduct = (id) => {
    navigate(`/product/${id}`)
  }
  useEffect(() => {
    fetchDetailProduct(); 
  }, [product.productName])

  return (
    <div className='card' onClick={() => handleClickCardProduct(id)}>
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
          <span>{product.productName}</span>
          <p>{product.shopAddress}</p>
          <div className="productItem">
            <div style={{ display: 'flex', alignItems: 'center ' }}>
              {/* <img src={money} alt="" /> */}
              <h3>{product.productPrice} VND</h3>
            </div>
            <div>
              <Button className="orderBtn" text={<i className='fa-solid fa-cart-shopping' />} onClick={handleAddToCart} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card