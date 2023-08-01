import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Advertisement from './Advertisement';
import FoodSuggestions from './FoodSuggestions';
import PopularDishes from './PopularDishes';
import Services from './Services';
import imgProduct from '../../assets/images/productImage.jpg'

const MainHome = () => {
    const dataProduct = [
        {
            id: 1,
            image: imgProduct,
            productName: "Nho Mỹ",
            address: "790 Đường Láng, Đống Đa, Hà Nội",
            price: "70.000"
        },
        {
            id: 2,
            image: imgProduct,
            productName: "Nho Mỹ",
            address: "790 Đường Láng, Đống Đa, Hà Nội",
            price: "70.000"
        },
        {
            id: 3,
            image: imgProduct,
            productName: "Nho Mỹ",
            address: "790 Đường Láng, Đống Đa, Hà Nội",
            price: "70.000"
        },
        {
            id: 4,
            image: imgProduct,
            productName: "Nho Mỹ",
            address: "790 Đường Láng, Đống Đa, Hà Nội",
            price: "70.000"
        },
        {
            id: 5,
            image: imgProduct,
            productName: "Nho Mỹ",
            address: "790 Đường Láng, Đống Đa, Hà Nội",
            price: "70.000"
        },
        {
            id: 6,
            image: imgProduct,
            productName: "Nho Mỹ",
            address: "790 Đường Láng, Đống Đa, Hà Nội",
            price: "70.000"
        },
        {
            id: 7,
            image: imgProduct,
            productName: "Nho Mỹ",
            address: "790 Đường Láng, Đống Đa, Hà Nội",
            price: "70.000"
        },
        {
            id: 8,
            image: imgProduct,
            productName: "Nho Mỹ",
            address: "790 Đường Láng, Đống Đa, Hà Nội",
            price: "70.000"
        }
        ,
        {
            id: 9,
            image: imgProduct,
            productName: "Nho Mỹ",
            address: "790 Đường Láng, Đống Đa, Hà Nội",
            price: "70.000"
        }
    ]
    return (
        <div className='home'>
            <Banner />
            <Category />
            <Advertisement />
            <FoodSuggestions
                title="Gợi ý món ăn"
                data={dataProduct.slice(0, 8)}
                className='bgColorImage'
                color='#1e1d23'
                isHorizontalCard={false}
                isSlideShow={true}
            />
            <PopularDishes />
            <Services />
        </div>
    );
};

export default MainHome;