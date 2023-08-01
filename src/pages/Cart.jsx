import React, { useState } from 'react';
import Button from '../components/Button';
import imgProducts from '../assets/images/productImage.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Cart = () => {
    const [numbersProduct, setNumbersProduct] = useState(4);
    const handleChangeValueInput = (e) => {
        setNumbersProduct(e.target.value);
    }
    const dataProducts = [
        {
            id: 1,
            img: imgProducts,
            productsName: 'Hamboger',
            number: numbersProduct,
            price: '480.000'
        },
        {
            id: 2,
            img: imgProducts,
            productsName: 'Hamboger',
            number: numbersProduct,
            price: '480.000'
        },
        {
            id: 3,
            img: imgProducts,
            productsName: 'Hamboger',
            number: numbersProduct,
            price: '480.000'
        },
        {
            id: 4,
            img: imgProducts,
            productsName: 'Hamboger',
            number: numbersProduct,
            price: '480.000'
        },
        {
            id: 5,
            img: imgProducts,
            productsName: 'Hamboger',
            number: numbersProduct,
            price: '480.000'
        },
        {
            id: 6,
            img: imgProducts,
            productsName: 'Hamboger',
            number: numbersProduct,
            price: '480.000'
        },
        {
            id: 7,
            img: imgProducts,
            productsName: 'Hamboger',
            number: numbersProduct,
            price: '480.000'
        },
    ]
    return (
        <div>
            <Header />
            <div className="cart-container cart">
                <div >
                    <h1>Giỏ Hàng</h1>
                    <div className='cart-table'>
                        <table cellPadding='12px 16px' cellSpacing='0'>
                            <thead>
                                <tr>
                                    <th>Xóa</th>
                                    <th>Ảnh</th>
                                    <th>Sản Phẩm</th>
                                    <th>Giá</th>
                                    <th>Số Lượng</th>
                                    <th>Thành Tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dataProducts && dataProducts.length
                                    && dataProducts.map((productsItem) => (
                                        <tr key={productsItem.id}>
                                            <td><Button text={<i className="fa-solid fa-trash-can"></i>} /></td>
                                            <td><img src={productsItem.img} alt="" /></td>
                                            <td className='cart-product-name'>{productsItem.productsName}</td>
                                            <td>120.000VND</td>
                                            <td><input type="text" required value={productsItem.number} onChange={handleChangeValueInput} /></td>
                                            <td className='cart-product-price'>{productsItem.price}VND</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="cart-pay">
                        <hr />
                        <div>
                            <p>
                                Tổng tiền: <span>100.000.000VND</span>
                            </p>
                            <div>
                                <Button text='Thanh toán' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div >
    );
};

export default Cart;