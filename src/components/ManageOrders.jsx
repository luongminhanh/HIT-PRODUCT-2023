import momo from "../assets/images/momo.png"
import AdminDataTable from "./AdminDataTable";
import '../assets/scss/components/ManageUser.scss'

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'avatar',
        headerName: 'Ảnh',
        width: 150,
        renderCell: (params) => {
            return <img src={params.row.img || momo} alt="st"/>
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
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, phone:'012342983' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, phone:'012342983' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, phone:'012342983' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, phone:'012342983' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, phone:'012342983' },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150, phone:'012342983' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44,phone:'012342983' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, phone:'012342983' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, phone:'012342983' },
];
const ManageOrders = () => {
  return (
    <div className="manage-users">
        <div className="info">
            <h1>Quản lý đơn hàng</h1>
        </div>
        <AdminDataTable slug="orders" columns={columns} rows={rows}/>
    </div>
  )
}

export default ManageOrders
