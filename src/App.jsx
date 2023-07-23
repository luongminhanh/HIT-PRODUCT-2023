// import Home from "./pages/Home"
// import Contact from "./pages/Contact"
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import LayoutPage from "./layouts/LayoutPage";
import Food from "./components/Food";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/AdminSideBar";
import Admin from "./pages/Admin";
import DetailProduct from "./pages/DetailProduct";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import UserInfor from "./pages/UserInfor";
function App() {


  return (

    <div className="App">
      {/* <Register />
      <LogIn />
      <Header />
      <UserInfor /> */}
      <Admin />
      {/* <Food /> */}
      {/* <DetailProduct /> */}
      {/* <Footer /> */}
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
