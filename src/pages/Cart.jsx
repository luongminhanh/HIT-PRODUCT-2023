import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import imgProducts from '../assets/images/productImage.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { deleteProductFromCart, getProductInCart, updateProductInCart } from '../store/apiRequest';
import { addToCart, decreaseCart, decreaseProductCart, getTotals, removeFromCart } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const [numbersProduct, setNumbersProduct] = useState(4);
    const [cartId, setCartId] = useState(0);
    const [dataProductInCart, setDataProductInCart] = useState([]);
    const [totalMoney, setTotalMoney] = useState(0);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const handleChangeValueInput = (e) => {
        setNumbersProduct(e.target.value);
    }  

    const getProductsInCart = async (cartId) => {
        const res = await getProductInCart(cartId);
        // console.log("cart: ", res.data.data.length);
        setDataProductInCart(res.data.data);
    }

    const handleRemoveProductFromCart = async (product, productId) => {
        // dispatch(removeFromCart(productId));
        dispatch(decreaseProductCart(product));
        const res = await updateProductInCart(cartId, productId, 0);
    }

    const handleDecreaseProduct = async (product, productId, quantity) => {
        dispatch(decreaseCart(product));
        const res = await updateProductInCart(cartId, productId, quantity);
    }

    const handleIncreaseProduct = async (product, productId, quantity) => {
        dispatch(addToCart(product));
        const res = await updateProductInCart(cartId, productId, quantity);
    }

    useEffect(() => {
        getProductsInCart(cartId);
        setCartId(localStorage.getItem("cartId"));
    }, [cartId])

    useEffect(() => {
        const total = dataProductInCart.reduce((accumulator, currentProduct) =>
            accumulator + currentProduct.price * currentProduct.quantity, 0);
        setTotalMoney(total);
    }, [dataProductInCart]);

    useEffect(() => {
        dispatch(getTotals())
    }, [dispatch])
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
                                    dataProductInCart && dataProductInCart.length >  0? 
                                     cart.cartItems.map((item) => (
                                        <tr key={item.productId}>
                                            <td><Button text={<i className="fa-solid fa-trash-can"></i>} onClick={() => handleRemoveProductFromCart(item, item.productId)} /></td>
                                            <td><img src={item.productImageUrl} alt="" /></td>
                                            <td className='cart-product-name'>{item.productName}</td>
                                            <td>{(item.price) ? (item.price) : (item.productPrice)}đ</td>
                                            <td className='cart-items-quantity'>
                                                <button onClick={() => handleDecreaseProduct(item, item.productId, item.quantity - 1)}>-</button>
                                                <input type="text" required value={item.quantity} onChange={handleChangeValueInput} />
                                                <button onClick={() => handleIncreaseProduct(item, item.productId, item.quantity + 1)}>+</button>
                                            </td>
                                            <td className='cart-product-price'>{(item.price ? item.price * item.quantity : item.productPrice * item.quantity).toLocaleString('vi-VN')}đ</td>
                                        </tr>
                                    ))
                                    :
                                    "Chưa có sản phẩm nào trong giỏ hàng"
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="cart-pay">
                        <hr />
                        <div>
                            <p>
                                Tổng tiền: <span>{cart.cartTotalAmount.toLocaleString('vi-VN')}đ</span>
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