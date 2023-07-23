import 'react-pro-sidebar/dist/css/styles.css';
import { FaProductHunt } from 'react-icons/fa';
import logo from '../assets/images/logo.png'
import { Menu } from "antd";
import { HomeOutlined, PoweroffOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div style={{ padding: "20px 0 20px 40px", borderRight: "2px solid rgba(5, 5, 5, 0.06)" }}>
                <img style={{ boxShadow: "10px 10px 10px -5px #cca8a8", borderRadius: "10px", objectFit: "cover", width: "120px", height: "60px" }} src={logo} />
            </div>
            <Menu 
            onClick={({key}) => {
                if (key==="signout"){
                    console.log("signout");
                }
                else {
                    navigate(key);
                }
            }}
            style={{ width: "220px", height: "85vh", borderRight: "2px solid rgba(5, 5, 5, 0.06)" }}
                items={[
                    { label: "Trang chủ", key:"/admin", icon: <HomeOutlined /> },
                    { label: "Quản lý khách hàng", key:"/admin/users", icon: <UserOutlined /> },
                    { label: "Quản lý sản phẩm", key:"/admin/products", icon: <FaProductHunt /> },
                    { label: "Quản lý đơn hàng", key:"/admin/orders", icon: <ShoppingCartOutlined /> },
                    { label: "Đăng xuất", key:"signout", icon: <PoweroffOutlined /> },
                ]}
            ></Menu>
        </>
    )
}
export default SideBar;
