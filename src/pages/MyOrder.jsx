import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import imgProduct from '../assets/images/listPD_3.jpg';
import { billOfCurrentCustomer } from '../store/apiRequest';
const MyOrder = () => {
    const navigate = useNavigate();
    const [dataBillBuy, setDataBillBuy] = useState([]);
    const handleGetOrders = async () => {
        const res = await billOfCurrentCustomer(1);
        console.log(res.data.data, "hiện tại bill");
        setDataBillBuy(res.data.data);
    }

    useEffect(() => {
        handleGetOrders();
    }, [])

    return (
        <div className='myorder' >
            <h1>Đơn hàng của tui</h1>
            {dataBillBuy && dataBillBuy.map((item) => (
                <React.Fragment key={item.id}>
                    < div className="myorder-detail">
                        <div className='myorder-detail-shop'>
                            <h5>
                                <i className="fa-solid fa-shop"></i>
                                {item.bill.status}
                            </h5>
                            <Button onClick={() => navigate('')}>Xem Shop</Button>
                        </div>
                        <hr />
                        <div className="myorder-detail-product">
                            <div style={{ display: "flex" }}>
                                <img src={item.product.image} alt="" />
                                <div>
                                    <h6>{item.product.name}</h6>
                                    <p>
                                        x {item.quantity}
                                    </p>
                                    <div className='product-attention'>
                                        7 ngày trả hàng
                                    </div>
                                </div>
                            </div>
                            <div style={{ color: "#F06C25", fontWeight: 600, fontSize: 20 }}>
                                {item.bill.payment}
                            </div>
                        </div>
                        <hr />
                        <div className='myorder-detail-cancel'>
                            <Button>Hủy Hàng</Button>
                        </div>
                    </div>
                </React.Fragment>
            ))}

        </div >
    );
};

export default MyOrder;