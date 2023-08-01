import React from 'react';
import FoodSuggestions from './homeUser/FoodSuggestions';
import imgProduct from '../assets/images/productImage.jpg';
import Button from './Button';
import Icon from './Icon';
import Header from './Header';
import Footer from './Footer';


const Search = () => {
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
        <div>
            <div className='search search-container'>
                <div>
                    <FoodSuggestions
                        title="Nho"
                        data={dataProduct.slice(0, 8)}
                        isHorizontalCard={false}
                        color='#1e1d23'
                        isSlideShow={false}
                    />
                    <div className="order-history-paging">
                        <Button className='btn-history-paging' text={<Icon className="fa-solid fa-angles-left"></Icon>}></Button>
                        <Button className='btn-history-paging  active' text='1'></Button>
                        <Button className='btn-history-paging' text='2'></Button>
                        <Button className='btn-history-paging' text='3'></Button>
                        <Button className='btn-history-paging' text='4'></Button>
                        <Button className='btn-history-paging' text={<Icon className="fa-solid fa-angles-right"></Icon>}></Button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Search;