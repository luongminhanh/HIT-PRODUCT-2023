import React, { useState } from 'react';
import Icon from '../components/Icon';
import Button from '../components/Button';

const OrderHistory = () => {
    // const [isActive, setIsActive] = useState(false);
    // const handleActivePaging = () => {

    // }
    return (
        <div className='order-history order-contaniner'>
            <div>
                <div className='order-history-title'>
                    <h1>
                        Lịch sử mua hàng
                    </h1>
                </div>
                <div className="order-history-table">
                    <table cellPadding=' 12px 16px' cellSpacing='0' border='1px solid #dedede'>
                        <thead>
                            <tr>
                                <th>Đơn Hàng</th>
                                <th>Tên Hàng</th>
                                <th>Ngày Đặt</th>
                                <th>Trạng Thái</th>
                                <th>Số Lượng Đặt</th>
                                <th>Tổng Tiền</th>
                                <th>Đặt lại</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>#99</td>
                                <td>Bánh Mì Trứng</td>
                                <td>13:36 03-05-2023</td>
                                <td>Chờ Xử Lý</td>
                                <td>1</td>
                                <td>100.000.000VND</td>
                                <td>
                                    <Button className='resetIcon' text={<Icon className="fa-solid fa-arrow-rotate-left" />}></Button>
                                </td>
                            </tr>
                            <tr>
                                <td>#98</td>
                                <td>Bánh Mì Trứng</td>
                                <td>13:36 03-05-2023</td>
                                <td>Hủy Hàng</td>
                                <td>1</td>
                                <td>100.000.000VND</td>
                                <td>
                                    <Button className='resetIcon' text={<Icon className="fa-solid fa-arrow-rotate-left" />}></Button>
                                </td>
                            </tr>
                            <tr>
                                <td>#97</td>
                                <td>Bánh Mì Trứng</td>
                                <td>13:36 03-05-2023</td>
                                <td>Giao Hàng Thành Công</td>
                                <td>1</td>
                                <td>100.000.000VND</td>
                                <td>
                                    <Button className='resetIcon' text={<Icon className="fa-solid fa-arrow-rotate-left" />}></Button>
                                </td>
                            </tr>
                            <tr>
                                <td>#96</td>
                                <td>Bánh Mì Trứng</td>
                                <td>13:36 03-05-2023</td>
                                <td>Giao Hàng Thành Công</td>
                                <td>1</td>
                                <td>100.000.000VND</td>
                                <td>
                                    <Button className='resetIcon' text={<Icon className="fa-solid fa-arrow-rotate-left" />}></Button>
                                </td>
                            </tr>
                            <tr>
                                <td>#95</td>
                                <td>Bánh Mì Trứng</td>
                                <td>13:36 03-05-2023</td>
                                <td>Hủy Hàng</td>
                                <td>1</td>
                                <td>100.000.000VND</td>
                                <td>
                                    <Button className='resetIcon' text={<Icon className="fa-solid fa-arrow-rotate-left" />}></Button>
                                </td>
                            </tr>
                            <tr>
                                <td>#94</td>
                                <td>Bánh Mì Trứng</td>
                                <td>13:36 03-05-2023</td>
                                <td>Hủy Hàng</td>
                                <td>1</td>
                                <td>100.000.000VND</td>
                                <td>
                                    <Button className='resetIcon' text={<Icon className="fa-solid fa-arrow-rotate-left" />}></Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="order-history-paging">
                    <Button className='btn-history-paging' text={<Icon className="fa-solid fa-angles-left"></Icon>}></Button>
                    <Button className='btn-history-paging  active' text='1'></Button>
                    <Button className='btn-history-paging' text='2'></Button>
                    <Button className='btn-history-paging' text='3'></Button>
                    <Button className='btn-history-paging' text='4'></Button>
                    <Button className='btn-history-paging' text={<Icon className="fa-solid fa-angles-right"></Icon>}></Button>
                </div>
            </div>
        </div >
    );
};

export default OrderHistory;