import React from 'react'
import star from '../assets/images/star.png'
import money from '../assets/images/money.png'
import Button from './Button'


const Card = ({
  image,
  name,
  address,
  price
}) => {

  return (
    <div className='card'>
      <div className="box">Đang hoạt động</div>
      <div className='imgProduct'>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
      <div className="card-content">
        <div className='card-icon'>
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </div>
        <div>
          <h4>{productName}</h4>
          <p>{address}</p>
          <div className="productItem">
            <div style={{ display: 'flex', alignItems: 'center ' }}>
              {/* <img src={money} alt="" /> */}
              <h3>{price} VND</h3>
            </div>
            <div>
              <Button className="orderBtn" text={<i className='fa-solid fa-cart-shopping' />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card