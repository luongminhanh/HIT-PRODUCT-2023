//import img from "../assets/images/imageLogin.jpg"
import '../assets/scss/components/UserInfor.scss'

const UserInfor = () => {
    return (
        <div className='userinfor-container'>
            <div className="userinfor">
                <div className='userinfor__title'>
                    Thông tin cá nhân
                </div>
                <div className='userinfor__main'>
                    <div className="userinfor__basic">
                        {/* <img className="userinfor__basic--picture" src={img} /> */}
                        <div className='userinfor__basic--name'>Nguyễn Thị Trang</div>
                        <div className='userinfor__basic--main'>
                            <div className='userinfor__basic--main--address'>
                                <i className="fa-solid fa-house-chimney"></i>
                                <span>Hà Nội</span>
                            </div>
                            <div className='userinfor__basic--main--birth'>
                                <i className='fa fa-birthday-cake'></i>
                                <span>12/07/2003</span>
                            </div>
                            <div className='userinfor__basic--main--phone'>
                                <i className='fa-solid fa-phone'></i>
                                <span>0123456789</span>
                            </div>
                        </div>
                    </div>
                    <div className='userinfor__change--main'>
                        <div className='userinfor__changeInfor'>
                            <div className='userinfor__changeInfor--name'>
                                <span>Họ tên</span>
                                <br></br>
                                <input type='text' />
                            </div>
                            <div className='userinfor__changeInfor--birth'>
                                <span>Ngày sinh</span>
                                <br></br>
                                <input type='text' />
                            </div>
                            <div className='userinfor__changeInfor--address'>
                                <span>Địa chỉ</span>
                                <br></br>
                                <input type='text' />
                            </div>
                            <div className='userinfor__changeInfor--phone'>
                                <span>Số điện thoại</span>
                                <br></br>
                                <input type='text' />
                            </div>
                            <button className='userinfor__changeInfor--save'>Lưu thay đổi</button>
                        </div>
                        <div className='userinfor__changePassword'>
                            <div className='userinfor__changePassword--old'>
                                <span>Mật khẩu cũ</span>
                                <br></br>
                                <input type='text' />
                            </div>
                            <div className='userinfor__changePassword--new'>
                                <span>Mật khẩu mới</span>
                                <br></br>
                                <input type='text' />
                            </div>
                            <div className='userinfor__changePassword--confirm'>
                                <span>Xác nhận mật khẩu</span>
                                <br></br>
                                <input type='text' />
                            </div>
                            <button className='userinfor__changePassword--save'>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfor