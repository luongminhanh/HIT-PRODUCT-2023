import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import { getCurrentUserLogin, getCustomer, getProductInCart, placeOrder, postCreateBill } from '../store/apiRequest';
import { useDispatch, useSelector } from 'react-redux';

const Order = () => {
    const [dataUser, setDataUser] = useState({});
    const [dataCustomer, setDataCustomer] = useState({});
    const [dataProductInCart, setDataProductInCart] = useState([]);
    const [shipPrice, setShipPrice] = useState(35000);
    const [billId, setBillId] = useState(0);
    const cart = useSelector((state) => state.cart);
    const getCurrentCustomer = async () => {
        const res = await getCurrentUserLogin();
        setDataUser(res.data.data);
        const resCus = await getCustomer(localStorage.getItem("cartId"));
        setDataCustomer(resCus.data.data);
    }

    const getProductsInCart = async (cartId) => {
        const res = await getProductInCart(cartId);
        setDataProductInCart(res.data.data);
        console.log("heree", dataProductInCart);
    }

    const handlePayBill = async () => {        
        const res = await placeOrder();
        console.log(res.data.data[0].billId);
        setBillId(res.data.data[0].billId);
        postCreateBill(localStorage.getItem("cartId"), res.data.data[0].billId);
        alert('Hoàn tất mua hàng');
    }

    useEffect(() => {
        getCurrentCustomer();
        getProductsInCart(localStorage.getItem("cartId"));
    }, []);
    return (
        <div className='order order-container'>
            <div>
                <div className="order-infor">
                    <div className="order-infor-user">
                        <div className='order-infor-user-title'>
                            <h3>THÔNG TIN NHẬN HÀNG</h3>
                        </div>
                        <div className="order-infor-user-form">
                            <div className="form-item">
                                <div>
                                    <label htmlFor="">Họ tên người nhận <span>*</span></label> <br />
                                    <input type="text" placeholder={dataCustomer.fullName} />
                                </div>
                            </div>
                            <div className="form-item">
                                <div>
                                    <label htmlFor="">Số điện thoại <span>*</span></label> <br />
                                    <input type="text" placeholder={dataCustomer.phoneNumber} />
                                </div>
                            </div>
                            <div className="form-item">
                                <div>
                                    <label htmlFor="">Gmail <span>*</span></label> <br />
                                    <input type="text" placeholder={dataUser.email} />
                                </div>
                            </div>
                            <div className="form-item">
                                <div>
                                    <label htmlFor="">Địa chỉ cụ thể <span>*</span></label> <br />
                                    <input type="text" placeholder={dataCustomer.address} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-infor-products">
                        <div className='order-infor-products-title'>
                            <h3>SẢN PHẨM BẠN ĐẶT</h3>
                        </div>
                        <div className="order-infor-products-form">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sản phẩm</th>
                                        <th>Tổng giá</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.cartItems && cart.cartItems.length > 0 && (
                                        <React.Fragment>
                                            {cart.cartItems.map((item) => (
                                                <tr key={item.productId}>
                                                    <td className='products-name'>
                                                        {item.productName} <span className='attention'>x {item.quantity}</span>
                                                    </td>
                                                    <td>{(item.price * item.quantity).toLocaleString('vi-VN')}</td>
                                                </tr>
                                            ))}
                                        </React.Fragment>
                                    )}
                                    {/* <tr>
                                        <td className='products-name'>
                                            Bánh mì trứng <span className='attention'>x 5</span>
                                        </td>
                                        <td>
                                            120.000.000VND
                                        </td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="order-pay">
                    <div className="order-pay-title">
                        <h3>THANH TOÁN</h3>
                    </div>
                    <div className="order-pay-infor">
                        <table>
                            <thead>
                                <tr>
                                    <th>Tổng tiền hàng:</th>
                                    <td>{cart.cartTotalAmount.toLocaleString('vi-VN')}đ</td>
                                </tr>
                                <tr>
                                    <th>Phí vận chuyển:</th>
                                    <td>{shipPrice.toLocaleString('vi-VN')}đ</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={2}>
                                        <hr />
                                    </td>
                                </tr>
                                <tr style={{ fontSize: 20 }}>
                                    <th>Tổng tiền: </th>
                                    <th className='pay-money'>
                                        {(cart.cartTotalAmount + shipPrice).toLocaleString('vi-VN')}
                                    </th>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <div>
                                            <Button text='MUA HÀNG' onClick={() => handlePayBill()}/>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;