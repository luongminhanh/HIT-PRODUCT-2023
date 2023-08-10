import React from 'react'


const TableOrders = ({ listOrder, handleClickBtnUpdate, handleClickViewOrder, handleClickBtnDelete }) => {

    return (
        <div>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Created Date</th>
                        <th scope="col">LastModified Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listOrder && listOrder.length > 0 &&
                        listOrder.map((item, index) => {
                            return (
                                <tr key={`table-Orders-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.createdDate}</td>
                                    <td>{item.lastModifiedDate}</td>
                                    <td>
                                        <button 
                                        className='btn btn-success'
                                        onClick={() => handleClickViewOrder(item)}
                                        >View</button>
                                        <button
                                            className='btn btn-warning mx-3'
                                            onClick={()=>handleClickBtnUpdate(item)}
                                        >Update</button>
                                        <button 
                                        className='btn btn-danger'
                                        onClick={()=>handleClickBtnDelete(item.id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    {listOrder && listOrder.length === 0
                        && <tr>
                            <td colSpan="4">Not found data</td>
                        </tr>
                    }

                </tbody>
            </table>
        </div>
    )
}

export default TableOrders