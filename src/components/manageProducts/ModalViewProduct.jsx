import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../assets/scss/components/ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import { toast } from 'react-toastify';
import _ from 'lodash';


function ModalViewProduct({ show, setShow, dataProduct }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [disCount, setDiscount] = useState("");
    const [stock, setStock] = useState("");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("")

    const handleClose = () => {
        setShow(false);
        // setEmail('');
        // setPassword('');
        // setFullName('');
        // setCreatedDate('');
        // setLastModifiedDate('');
        // setImage('');
        // setPreviewImage('');
        // setJob("");
        // setAddress("");
    }

    useEffect(() => {
        if (!_.isEmpty(dataProduct)) {
            setName(dataProduct.name);
            setPrice(dataProduct.price);
            setStock(dataProduct.stock);
            setDescription(dataProduct.description);
            setDiscount(dataProduct.disCount);
            setImage(dataProduct.image);
            setPreviewImage(dataProduct.previewImage);
            console.log(show);
        }
    }, [dataProduct]);

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className='modal-add-user'
            >

                <Modal.Header closeButton>
                    <Modal.Title>View Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Name</label>
                            <input
                                type="email"
                                className="form-control"
                                value={dataProduct.name}
                                disabled={true}
                                onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Price</label>
                            <input
                                className="form-control"
                                value={dataProduct.price}
                                disabled={true}
                                onChange={(event) => setPrice(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                value={dataProduct.description}
                                disabled={true}
                            // onChange={(event) => setPassword(event.target.value)} 
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Stock</label>
                            <input
                                type="text"
                                className="form-control"
                                value={dataProduct.stock}
                                disabled={true}
                            // onChange={(event) => setPassword(event.target.value)} 
                            />
                        </div>
                       
                        {/* <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select
                                disabled={true}
                                className="form-select"
                                value={role}
                                onChange={(event) => setRole(event.target.value)}
                            >
                                <option value="Product">Product</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div> */}
                        <div className='col-md-12'>
                            <label className='form-label label-upload' htmlFor='labelUpload'>
                                <FcPlus /> Upload File Image
                            </label>
                            <input type="file"
                                id="labelUpload"
                                hidden
                                disabled={true}
                            />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {previewImage ?
                                <img src={previewImage} alt="img" />
                                :
                                <span>Preview Image</span>
                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalViewProduct;