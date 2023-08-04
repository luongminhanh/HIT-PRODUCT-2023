import React from 'react'


const TableCategories = ({ listCategory, handleClickBtnUpdate, handleClickViewCategory, handleClickBtnDelete }) => {

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
                    {listCategory && listCategory.length > 0 &&
                        listCategory.map((item, index) => {
                            return (
                                <tr key={`table-categorys-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.createdDate}</td>
                                    <td>{item.lastModifiedDate}</td>
                                    <td>
                                        <button 
                                        className='btn btn-success'
                                        onClick={() => handleClickViewCategory(item)}
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
                    {listCategory && listCategory.length === 0
                        && <tr>
                            <td colSpan="4">Not found data</td>
                        </tr>
                    }

                </tbody>
            </table>
        </div>
    )
}

export default TableCategories