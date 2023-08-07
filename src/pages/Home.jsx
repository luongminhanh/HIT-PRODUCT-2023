import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import MainHome from '../components/homeUser/MainHome';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { getAllCustomers, getCurrentUserLogin, getProductInCart } from '../store/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems } from '../store/cartSlice';

const Home = () => {
  const [cartItem, setCartItem] = useState({});
  const [cartId, setCartId] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const findCartId = async () => {
    const resCus = await getAllCustomers();
    // console.log("resCus", resCus.data.data.items);
    const resCur = await getCurrentUserLogin();
    console.log('resCur', resCur.data.data.username);
    const currentUserId = resCus.data.data.items.find(obj => obj.fullName === resCur.data.data.username);
    localStorage.setItem("cartId", currentUserId.id);
    setCartId(currentUserId.id);
  }

  const fetchItemInCart = async () => {
    const res = await getProductInCart(localStorage.getItem("cartId"));
    setCartItem(res.data.data);
    cart.cartItems = res.data.data;
    localStorage.setItem("cartItems", JSON.stringify(res.data.data));
  }

  useEffect(() => {
    findCartId();
    fetchItemInCart();
    dispatch(fetchCartItems())
    console.log("quantity: ", cart.cartItems)
  }, [cartId])

  return (
    <div>
      <Header />
      {/* <MainHome /> */}
      <Outlet />
      <Footer />
    </div >
  )
}

export default Home;