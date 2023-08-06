import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import imgProducts from '../assets/images/productImage.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { deleteProductFromCart, getProductInCart, updateProductInCart } from '../store/apiRequest';

const Cart = () => {
    const [numbersProduct, setNumbersProduct] = useState(4);
    const [cartId, setCartId] = useState(0);
    const [dataProductInCart, setDataProductInCart] = useState([]);
    const [totalMoney, setTotalMoney] = useState(0);

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
    // const findCartId = async () => {
    //     const resCus = await getAllCustomers();
    //     // console.log(resCus.data.data.items);
    //     const resCur = await getCurrentUserLogin();
    //     // console.log('resCur', resCur.data.data.username);
    //     const currentUserId = resCus.data.data.items.find(obj => obj.fullName === resCur.data.data.username);

    // }

    const getProductsInCart = async (cartId) => {
        const res = await getProductInCart(cartId);
        console.log("cart: ", res.data.data.length);
        setDataProductInCart(res.data.data);
    }

    const handleRemoveProductFromCart = async (productId) => {
        const res = await deleteProductFromCart(cartId, productId);
        console.log('delete from cart', res);
    }

    const handleUpdateProduct = async (productId, quantity) => {
        const res = await updateProductInCart(cartId, productId, quantity);
        console.log('decrease product', res);
    }

    useEffect(() => {
        // findCartId();
        getProductsInCart(cartId);
        setCartId(localStorage.getItem("cartId"));
    }, [cartId])

    useEffect(() => {
        const total = dataProductInCart.reduce((accumulator, currentProduct) =>
            accumulator + currentProduct.price * currentProduct.quantity, 0);
        setTotalMoney(total);
    }, [dataProductInCart]);

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
                                    dataProductInCart && dataProductInCart.length
                                    && dataProductInCart.map((item) => (
                                        <tr key={item.productId}>
                                            <td><Button text={<i className="fa-solid fa-trash-can"></i>} onClick={() => handleRemoveProductFromCart(item.productId)} /></td>
                                            <td><img src={item.productImageUrl} alt="" /></td>
                                            <td className='cart-product-name'>{item.productName}</td>
                                            <td>{(item.price).toLocaleString('vi-VN')}đ</td>
                                            <td className='cart-items-quantity'>
                                                <button onClick={() => handleUpdateProduct(item.productId, item.quantity - 1)}>-</button>
                                                <input type="text" required value={item.quantity} onChange={handleChangeValueInput} />
                                                <button onClick={() => handleUpdateProduct(item.productId, item.quantity + 1)}>+</button>

                                            </td>
                                            <td className='cart-product-price'>{(item.price * item.quantity).toLocaleString('vi-VN')}đ</td>
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
                                Tổng tiền: <span>{totalMoney.toLocaleString('vi-VN')}đ</span>
                            </p>
                            <div>
                                <Button text='Thanh toán' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Cart;