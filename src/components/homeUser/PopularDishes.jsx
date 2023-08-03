import React, { useEffect, useState } from 'react';
import FoodSuggestions from './FoodSuggestions';
import imgProduct from '../../assets/images/productImage.jpg';
import imgPopularDishes from '../../assets/images/bg_4.png';
import Button from '../Button';
import listPD_1 from '../../assets/images/listPD_1.jpg';
import listPD_2 from '../../assets/images/listPD_2.jpg';
import listPD_3 from '../../assets/images/listPD_3.jpg';
import listPD_4 from '../../assets/images/listPD_4.jpg';
import video from '../../assets/videos/videoBanner.mp4';
import { getAllProducts } from '../../store/apiRequest';

const PopularDishes = ({data}) => {
    // const dataProduct = [
    //     {
    //         id: 1,
    //         image: imgProduct,
    //         productName: "Nho Mỹ",
    //         address: "790 Đường Láng, Đống Đa, Hà Nội",
    //         price: "70.000"
    //     },
    //     {
    //         id: 2,
    //         image: imgProduct,
    //         productName: "Nho Mỹ",
    //         address: "790 Đường Láng, Đống Đa, Hà Nội",
    //         price: "70.000"
    //     },
    //     {
    //         id: 3,
    //         image: imgProduct,
    //         productName: "Nho Mỹ",
    //         address: "790 Đường Láng, Đống Đa, Hà Nội",
    //         price: "70.000"
    //     },
    //     {
    //         id: 4,
    //         image: imgProduct,
    //         productName: "Nho Mỹ",
    //         address: "790 Đường Láng, Đống Đa, Hà Nội",
    //         price: "70.000"
    //     },
    //     {
    //         id: 5,
    //         image: imgProduct,
    //         productName: "Nho Mỹ",
    //         address: "790 Đường Láng, Đống Đa, Hà Nội",
    //         price: "70.000"
    //     },
    //     {
    //         id: 6,
    //         image: imgProduct,
    //         productName: "Nho Mỹ",
    //         address: "790 Đường Láng, Đống Đa, Hà Nội",
    //         price: "70.000"
    //     }
    // ]
    console.log("popular", data);
    return (
        <>
            <div className='popular-dishes'>
                <FoodSuggestions
                    title="Món ăn phổ biến"
                    data={data.slice(0, 6)}
                    color='#1e1d23'
                    className='popular-dishes-top'
                    isHorizontalCard={true}
                    isSlideShow={false}
                />
                <div className="popular-dishes-center">
                    <div className='popular-dishes-center-img'>
                        <img src={imgPopularDishes} alt="" />
                    </div>
                    <div className="popular-dishes-center-content">
                        <h3>HitFood</h3>
                        <h1>Làm đúng. Làm <br /> ngon.  Dành riêng  <br />cho bạn.</h1>
                        <Button text='ORDER NOW' />
                    </div>
                </div>
            </div>
            <div className="popular-dishes-bottom">
                <div><img src={listPD_1} alt="" /></div>
                <div><img src={listPD_2} alt="" /></div>
                <div><img src={listPD_3} alt="" /></div>
                <div><img src={listPD_4} alt="" /></div>
            </div>
            {/* <div className="popular-dishes-video">
                <video src={video} autoplay ></video>
            </div > */}
        </>
    );
};

export default PopularDishes;