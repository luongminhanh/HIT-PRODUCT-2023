import { Field, Formik } from "formik"
import img from "../assets/images/user.png"
import '../assets/scss/components/UserInfor.scss'
import Button from "../components/Button"
import { api, getCurrentUserLogin } from "../store/apiRequest"
import axios from "axios"
import { useEffect, useState } from "react"

const UserInfor = () => {
    const [userInfor, setUserInfor] = useState({})
    const getCurrentCustomer = async () => {
        const res = await getCurrentUserLogin();
        setUserInfor(res.data.data)
        console.log(userInfor);
        console.log(res);
    }
    useEffect(() => {
        getCurrentCustomer();
    }, [])
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
                            <h3>{userInfor.fullname ? userInfor.fullname : "Không xác định"}</h3>
                        </div>
                        <div className='userinfor__basic--main'>
                            <div>
                                <div className='userinfor__basic--main--address'>
                                    <i className="fa-solid fa-house-chimney"></i>
                                    <span>{userInfor.address ? userInfor.address : 'Không xác định'}</span>
                                </div>
                                {/* <div className='userinfor__basic--main--birth'>
                                    <i className='fa fa-birthday-cake'></i>
                                    <span>{userInfor.</span>
                                </div> */}
                                <div className='userinfor__basic--main--phone'>
                                    <i className='fa-solid fa-phone'></i>
                                    <span>{userInfor.phoneNumber ? userInfor.phoneNumber : 'Không xác định'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Formik
                        initialValues={{
                            fullname: userInfor.email,
                            birthday: '',
                            phoneNumber: '',
                            oldPassword: userInfor.newPassword,
                            newPassword: '',
                            comfirmNewPassword: ''
                        }}
                        enableReinitialize
                        // validationSchema={{

                        // }}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({
                            values,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <div className='userinfor__change--main'>
                                <form action="" onSubmit={handleSubmit}>
                                    <div className='userinfor__changeInfor'>
                                        <p>Thông tin chi tiết</p>
                                        <hr />
                                        <div className="changeInforItemGroup">
                                            <div className='userinfor__changeInfor--name'>
                                                <span>Họ tên</span>
                                                <br></br>
                                                <div className="inp">
                                                    <Field type='text' name="fullname" />
                                                </div>
                                            </div>
                                            <div className='userinfor__changeInfor--birth'>
                                                <span>Ngày sinh</span>
                                                <br></br>
                                                <div className="inp">
                                                    <Field type='text' name="birthday" />
                                                </div>
                                            </div>
                                            <div className='userinfor__changeInfor--phone'>
                                                <span>Số điện thoại</span>
                                                <br></br>
                                                <div className="inp">
                                                    <Field type='text' name="phoneNumber" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="changeInforItemGroup changeInforItemGroup_address ">
                                            <div className='userinfor__changeInfor--address'>
                                                <span>Địa chỉ</span>
                                                <br></br>
                                                <div className="inp">
                                                    <Field type='text' name="address" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="changeInforItemGroup">
                                            <div className='userinfor__changePassword--old'>
                                                <span>Mật khẩu cũ</span>
                                                <br></br>
                                                <div className="inp">
                                                    <Field type='password' name="oldPassword" />
                                                </div>
                                            </div>
                                            <div className='userinfor__changePassword--new'>
                                                <span>Mật khẩu mới</span>
                                                <br></br>
                                                <div className="inp">
                                                    <Field type='password' name="newPassword" />
                                                </div>
                                            </div>
                                            <div className='userinfor__changePassword--confirm'>
                                                <span>Xác nhận mật khẩu</span>
                                                <br></br>
                                                <div className="inp">
                                                    <Field type='password' name="comfirmNewPassword" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="changeInforItemGroup">
                                            <Button text='Submit' />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default UserInfor