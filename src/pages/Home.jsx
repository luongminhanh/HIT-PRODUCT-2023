import React, { useEffect } from 'react'
import Header from '../components/Header';
import MainHome from '../components/homeUser/MainHome';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { getAllCustomers, getCurrentUserLogin, getProductInCart } from '../store/apiRequest';




const Home = () => {
  const findCartId = async () => {
    const resCus = await getAllCustomers();
    // console.log(resCus.data.data.items);
    const resCur = await getCurrentUserLogin();
    // console.log('resCur', resCur.data.data.username);
    const currentUserId = resCus.data.data.items.find(obj => obj.fullName === resCur.data.data.username);
    localStorage.setItem("cartId", currentUserId.id);
  }

  const fetchItemInCart = async () => {
    const res = await getProductInCart(localStorage.getItem("cartId"));
    localStorage.setItem("cartItems", JSON.stringify(res.data.data));
  }
  useEffect(() =>{
    findCartId();
    fetchItemInCart();
  })

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