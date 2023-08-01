// import Home from "./pages/Home"
// import Contact from "./pages/Contact"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LayoutPage from "./layouts/LayoutPage";
import Card from "./components/Card";
import Food from "./components/Food";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HorizontalCard from "./components/HorizontalCard";
import Search from "./components/Search";
import SlideShow from "./components/SlideShow";
import Category from "./components/homeUser/Category";
import Cart from "./pages/Cart";
import SideBar from "./components/AdminSideBar";
import Admin from "./pages/Admin";
import DetailProduct from "./pages/DetailProduct";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Order from "./pages/Order";
import OrderHistory from "./pages/OrderHistory";
import Register from "./pages/Register";
import UserInfor from "./pages/UserInfor";
import ForgotPassword from "./pages/forgotPassword";
import MainHome from './components/homeUser/MainHome';
function App() {


  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path='' element={<MainHome />} />
          <Route path='order' element={<Order />} />
          <Route path='orderhistory' element={<OrderHistory />} />
          <Route path="search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/infor" element={<UserInfor />} />
          <Route path="/detail" element={<DetailProduct />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  )
}

export default App
