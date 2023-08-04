import img from "../assets/images/user.png"
import '../assets/scss/components/UserInfor.scss'
import Button from "../components/Button"

const UserInfor = () => {
    return (
        <div className='userinfor-container'>
            <div className="userinfor">
                <div className='userinfor__title'>
                    <h1>
                        Thông tin cá nhân
                    </h1>
                </div>
                <div className='userinfor__main'>
                    <div className="userinfor__basic">
                        <div className="userinfor__basic--picture">
                            <img src={img} />
                        </div>
                        <div className='userinfor__basic--name'>
                            <h3>Nguyễn Thị Trang</h3>
                        </div>
                        <div className='userinfor__basic--main'>
                            <div>
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
                    </div>
                    <div className='userinfor__change--main'>
                        <div className='userinfor__changeInfor'>
                            <p>Thông tin chi tiết</p>
                            <hr />
                            <div className="changeInforItemGroup">
                                <div className='userinfor__changeInfor--name'>
                                    <span>Họ tên</span>
                                    <br></br>
                                    <div className="inp">
                                        <input type='text' />
                                    </div>
                                </div>
                                <div className='userinfor__changeInfor--birth'>
                                    <span>Ngày sinh</span>
                                    <br></br>
                                    <div className="inp">
                                        <input type='text' />
                                    </div>
                                </div>
                                <div className='userinfor__changeInfor--phone'>
                                    <span>Số điện thoại</span>
                                    <br></br>
                                    <div className="inp">
                                        <input type='text' />
                                    </div>
                                </div>
                            </div>
                            <div className="changeInforItemGroup changeInforItemGroup_address ">
                                <div className='userinfor__changeInfor--address'>
                                    <span>Địa chỉ</span>
                                    <br></br>
                                    <div className="inp">
                                        <input type='text' />
                                    </div>
                                </div>
                            </div>
                            <div className="changeInforItemGroup">
                                <div className='userinfor__changePassword--old'>
                                    <span>Mật khẩu cũ</span>
                                    <br></br>
                                    <div className="inp">
                                        <input type='text' />
                                    </div>
                                </div>
                                <div className='userinfor__changePassword--new'>
                                    <span>Mật khẩu mới</span>
                                    <br></br>
                                    <div className="inp">
                                        <input type='text' />
                                    </div>
                                </div>
                                <div className='userinfor__changePassword--confirm'>
                                    <span>Xác nhận mật khẩu</span>
                                    <br></br>
                                    <div className="inp">
                                        <input type='text' />
                                    </div>
                                </div>
                            </div>

                            <div className="changeInforItemGroup">
                                <Button text='Submit' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfor