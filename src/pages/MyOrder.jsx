import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import imgProduct from '../assets/images/listPD_3.jpg';
const MyOrder = () => {
    const navigate = useNavigate();
    return (
        <div className='myorder' >
            <h1>Đơn hàng của tui</h1>
            <div className="myorder-detail">
                <div className='myorder-detail-shop'>
                    <h5>
                        <i class="fa-solid fa-shop"></i>
                        Cửa hàng Bánh mì Hà Giang
                    </h5>
                    <Button onClick={() => navigate('')}>Xem Shop</Button>
                </div>
                <hr />
                <div className="myorder-detail-product">
                    <div style={{ display: "flex" }}>
                        <img src={imgProduct} alt="" />
                        <div>
                            <h6>Bánh táo</h6>
                            <p>
                                x 7
                            </p>
                            <div className='product-attention'>
                                7 ngày trả hàng
                            </div>
                        </div>
                    </div>
                    <div style={{ color: "#F06C25", fontWeight: 600, fontSize: 20 }}>
                        600.000NVD
                    </div>
                </div>
                <hr />
                <div className='myorder-detail-cancel'>
                    <Button>Hủy Hàng</Button>

                </div>
            </div>
        </div>
    );
};

export default MyOrder;