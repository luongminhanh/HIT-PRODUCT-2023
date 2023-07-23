import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/configureStore.js'
import Admin from './pages/Admin.jsx'
import DashBoard from './components/DashBoard.jsx'
import DetailProduct from './pages/DetailProduct.jsx'
import LogIn from './pages/LogIn.jsx'
import Register from './pages/Register.jsx'
import AdminDataTable from './components/AdminDataTable.jsx'
import ManageUsers from './components/manageUser/ManageUsers.jsx'
import ManageProducts from './components/manageProducts/ManageProducts.jsx'
import ManageOrders from './components/ManageOrders.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App></App>}>
            <Route index element={<LogIn />} />
            <Route path="user" element={<Register />} />
          </Route>

          <Route path="/admin" element={<Admin></Admin>}>
            <Route index element={<DashBoard />} />
            <Route path="/admin/users" element={<ManageUsers />} />
            <Route path="/admin/products" element={<ManageProducts />} />
            <Route path="/admin/orders" element={<ManageOrders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
