// import Home from "./pages/Home"
// import Contact from "./pages/Contact"
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LayoutPage from "./layouts/LayoutPage";
import Card from "./components/Card";
import Food from "./components/Food";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/AdminSideBar";
import Admin from "./pages/Admin";
import DetailProduct from "./pages/DetailProduct";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import UserInfor from "./pages/UserInfor";
function App() {


  return (

    <div className="App">

      {/* <Header /> */}
      <Register />
      {/* <LogIn /> */}
      {/* <UserInfor /> */}
      {/* <Food /> */}
      {/* <DetailProduct /> */}
      {/* <Footer /> */}
      {/* <Home /> */}
      {/* <Card /> */}

      {/* <Routes>
        <Route element={<LayoutPage/>}>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/contact" element= {<Contact></Contact>} />
        </Route>
      </Routes> */}
    </div>
  )
}

export default App
