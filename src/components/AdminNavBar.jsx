import admin from '../assets/images/adminAvatar.jpg'
import '../assets/scss/components/AdminNavBar.scss'

const AdminNavBar = () => {
  return (
    <div className='admin-navbar'>
        <span>Trang chủ</span>
        <span>Đăng xuất</span>
        <div className='admin-infor'>
            <img src={admin}/>
        </div>
    </div>
  )
}

export default AdminNavBar