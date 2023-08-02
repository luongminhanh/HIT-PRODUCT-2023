import '../../assets/scss/components/ManageUser.scss'
// import ModalAddNewUser from "./ModalAddProduct";
import { useEffect, useState } from "react";
// import ModalDeleteUser from './ModalDeleteUser';
// import TableUsers from './TableUsers';
import { getAllCustomers, getAllProducts } from '../../store/apiRequest';
import ModalAddNewProduct from './ModalAddProduct';
import TableProducts from './TableProducts';
import ModalViewProduct from './ModalViewProduct';
// import ModalUpdateUser from './ModalUpdateUser';
// import ModalViewUser from './ModalViewUser';


const ManageProducts = () => {
    const [showModalAddNewProduct, setShowModalAddNewProduct] = useState(false);
    const [listProduct, setListProduct] = useState([]);
    const [showModalUpdateProduct, setShowModalUpdateProduct] = useState(false);
    const [dataProduct, setDataProduct] = useState({});
    const [showModalViewProduct, setShowModalViewProduct] = useState(false);
    const [showModalDeleteProduct, setShowModalDeleteProduct] = useState(false);
    const [dataDeleteProduct, setDataDeleteProduct] = useState({});

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateProduct(true);
        setDataProduct(user);
    }

    const handleClickViewUser = (user) => {
        setShowModalViewProduct(true);
        setDataProduct(user);
    }

    const handleClickBtnDelete = (user) => {
        setShowModalDeleteProduct(true);
        setDataDeleteProduct(user);
    }

    const fetchListProduct = async () => {
        const res = await getAllProducts();
        if (res && res.data) {
            console.log(res.data.data.items);
            setListProduct(res.data.data.items);
        }
    }

    useEffect(() => {
        fetchListProduct();
    }, [])

    return (
        <div className="manage-users">
            <div className="info">
                <h1>Quản lý khách hàng</h1>
                <button className="btn btn-primary" onClick={() => setShowModalAddNewProduct(true)}>Thêm mới</button>
            </div>
             <ModalAddNewProduct
                show={showModalAddNewProduct}
                setShow={setShowModalAddNewProduct}
                fetchListProduct={fetchListProduct}
            />
            {/*<ModalDeleteUser
                show={showModalDeleteUser}
                setShow={setShowModalDeleteUser}
                fetchListUser={fetchListUser}
                userId={dataDeleteUser}
            />
            <ModalUpdateUser
                show={showModalUpdateUser}
                setShow={setShowModalUpdateUser}
                fetchListUser={fetchListUser}
                dataUser={dataUser}
            />*/}
            <ModalViewProduct
                show={showModalViewProduct}
                setShow={setShowModalViewProduct}
                dataUser={dataProduct}
            /> 
            <TableProducts
                listProduct={listProduct}
                handleClickBtnUpdate={handleClickBtnUpdate}
                handleClickViewUser={handleClickViewUser}
                handleClickBtnDelete={handleClickBtnDelete}
            />
        </div>
    )
}

export default ManageProducts