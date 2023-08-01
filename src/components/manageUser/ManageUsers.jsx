import momo from '../../assets/images/momo.png'
import AdminDataTable from "../AdminDataTable";
import '../../assets/scss/components/ManageUser.scss'
import ModalAddNewUser from "./ModalAddNewUser";
import { useState } from "react";
import Button from "../Button";
import ModalDeleteUser from './ModalDeleteUser';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'avatar',
        headerName: 'Ảnh',
        width: 150,
        renderCell: (params) => {
            return <img src={params.row.img || momo} alt="st" />
        }
    },
    {
        field: 'firstName',
        headerName: 'Họ',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Tên',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Tuổi',
        width: 110,
        editable: true,
    },
    {
        field: 'phone',
        headerName: 'Điện thoại',
        width: 200,
        editable: true,
    },

];
const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, phone: '012342983' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, phone: '012342983' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, phone: '012342983' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, phone: '012342983' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, phone: '012342983' },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150, phone: '012342983' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, phone: '012342983' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, phone: '012342983' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, phone: '012342983' },
];
const ManageUsers = () => {
    const [showModalAddNewUser, setShowModalAddNewUser] = useState(false);
    const [showModalDeleteNewUser, setShowModalDeleteUser] = useState(false);

    const handleClickBtnAdd = () => {
        setShowModalAddNewUser(true);
    }
    const handleDeleteUser = () => {
        setShowModalDeleteUser(true);
    }
    return (
        <div className="manage-users">
            <div className="info">
                <h1>Quản lý khách hàng</h1>
                <Button text='Thêm mới' onClick={handleClickBtnAdd} />
            </div>
            <ModalAddNewUser
                show={showModalAddNewUser}
                setShow={setShowModalAddNewUser}
            />
            <ModalDeleteUser
                show={showModalDeleteNewUser}
                setShow={setShowModalDeleteUser}
            />
            <AdminDataTable
                slug="users"
                columns={columns}
                rows={rows}
                handleDeleteUser={handleDeleteUser}
            />
        </div>
    )
}

export default ManageUsers