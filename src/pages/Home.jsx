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
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const findCartId = async () => {
    const resCur = await getCurrentUserLogin();
    console.log(resCur.data.data.customerId, "here");
    localStorage.setItem("cartId", resCur.data.data.customerId);
    setCartId(resCur.data.data.customerId);
    console.log(resCur);

  }

  const fetchItemInCart = async () => {
    const res = await getProductInCart(localStorage.getItem("cartId"));
    setCartItem(res.data.data);
    localStorage.setItem("cartItems", JSON.stringify(res.data.data));
  }

  useEffect(() => {
    findCartId();
    // console.log("hello");
  }, [cartId]);

  const getCurrentCustomer = async () => {
    const res = await getCurrentUserLogin();
    setUsername(localStorage.getItem("username"));
    console.log("user đang login", res.data.data);
    setCartId(res.data.data.customerId);
    console.log(cartId, "cartId nè");
  }

  useEffect(() => {
    getCurrentCustomer();
    fetchItemInCart();
    dispatch(fetchCartItems());
    localStorage.setItem("cartId", cartId);
    // window.location.reload();
  }, [cartId])

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div >
  )
}

export default Home;