import React from 'react';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonComponent from '../components/Button';
import Icon from '../components/Icon';
import shopbanner from '../assets/images/shop-banner.jpg';
import FoodSuggestions from '../components/homeUser/FoodSuggestions';

const Shop = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='shop'>
            <div className="shop-banner">
                <img src={shopbanner} alt="" />
                <div className='text-abs-center'>
                    <h1 >
                        SHOP BÁNH MÌ BA LAN
                    </h1>
                    <p>
                        Địa chỉ: Số 298, Nguyên Xá, Bắc từ Liêm, Hà Nội
                    </p>
                    <p>
                        <span style={{ color: "#00a149", fontWeight: 900 }}>Hotline: </span>
                        <span style={{ textDecoration: "underline", color: "#000" }}>
                            0123456799
                        </span>
                    </p>
                </div>
            </div>
            <div className="shop-filter">
                <div className="filter">
                    <>
                        <Button variant="primary" onClick={handleShow}>
                            <i className="fa-solid fa-filter"></i>
                            FILTER
                        </Button>

                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Danh mục của Shop</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <div className="shop-list-cateorys">
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </>
                </div>
                <div className="select">
                    <>
                        <Form.Select>
                            <option>Mặc định</option>
                            <option>SX theo giá từ cao đến thấp</option>
                            <option>SX theo giá từ thấp đến cao</option>
                        </Form.Select>
                    </>
                </div>
            </div>
            <div className="shop-list-cards">
                <FoodSuggestions
                    title="Gợi ý món ăn"
                    // data={listDataProduct.slice(0, 8)}
                    className='NoneButton'
                    color='#1e1d23'
                    isHorizontalCard={false}
                    isSlideShow={false}
                />
                <div className="order-history-paging">
                    <ButtonComponent className='btn-history-paging' text={<Icon className="fa-solid fa-angles-left"></Icon>}></ButtonComponent>
                    <ButtonComponent className='btn-history-paging  active' text='1'></ButtonComponent>
                    <ButtonComponent className='btn-history-paging' text='2'></ButtonComponent>
                    <ButtonComponent className='btn-history-paging' text='3'></ButtonComponent>
                    <ButtonComponent className='btn-history-paging' text='4'></ButtonComponent>
                    <ButtonComponent className='btn-history-paging' text={<Icon className="fa-solid fa-angles-right"></Icon>}></ButtonComponent>
                </div>
            </div>
        </div>
    );
};

export default Shop;