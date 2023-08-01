import { Formik } from 'formik';
import React from 'react';
import Button from '../components/Button';

const Order = () => {
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
                                    <input type="text" placeholder='Nguyễn Thị Trang' />
                                </div>
                            </div>
                            <div className="form-item">
                                <div>
                                    <label htmlFor="">Số điện thoại <span>*</span></label> <br />
                                    <input type="text" placeholder='0123456789' />
                                </div>
                            </div>
                            <div className="form-item">
                                <div>
                                    <label htmlFor="">Gmail <span>*</span></label> <br />
                                    <input type="text" placeholder='abc@gmail.com' />
                                </div>
                            </div>
                            <div className="form-item">
                                <div>
                                    <label htmlFor="">Địa chỉ cụ thể <span>*</span></label> <br />
                                    <input type="text" placeholder='Số 258, Trường Đại học Công Nghiệp Hà Nội, Cơ sở 1' />
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
                                    <tr>
                                        <td className='products-name'>
                                            Bánh mì trứng <span className='attention'>x 5</span>
                                        </td>
                                        <td>
                                            120.000.000VND
                                        </td>
                                    </tr>
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
                                    <td>120.000.000VND</td>
                                </tr>
                                <tr>
                                    <th>Phí vận chuyển:</th>
                                    <td>120.000.000VND</td>
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
                                        120.0000.000VND
                                    </th>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <div>
                                            <Button text='THANH TOÁN' />
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