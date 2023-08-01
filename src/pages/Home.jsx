import React from 'react'
import Header from '../components/Header';
import MainHome from '../components/homeUser/MainHome';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';




const Home = () => {
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