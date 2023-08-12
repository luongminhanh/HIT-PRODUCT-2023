import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { billOfCurrentCustomer, cancelProduct } from '../store/apiRequest';
import axios from 'axios';
const MyOrder = () => {
    const navigate = useNavigate();
    const [dataBillBuy, setDataBillBuy] = useState([]);
    const handleGetOrders = async () => {
        const res = await billOfCurrentCustomer(localStorage.cartId);
        console.log(res.data.data, "hiện tại bill");
        setDataBillBuy(res.data.data);
    }

    useEffect(() => {
        handleGetOrders();
    }, [])
    const handleCancelProduct = async (id) => {
        let checkConfirm = confirm("Bạn có chắc chắn muốn hủy đơn hàng này🤨");
        if (checkConfirm) {
            try {
                await cancelProduct(id)
                console.log("Hủy rồi nha");
                handleGetOrders();
            } catch (error) {
                console.log(error);
                console.log("Lỗi rồi");
            }
        }
    }
    console.log(dataBillBuy);
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
                                {item.bill.payment}VND
                            </div>
                        </div>
                        <hr />
                        <div className='myorder-detail-cancel'>
                            <Button onClick={() => handleCancelProduct(item.bill.id)}>Hủy Hàng</Button>
                        </div>
                    </div>
                </React.Fragment>
            ))}

        </div >
    );
};

export default MyOrder;