import React from 'react';
import porridge from '../../assets/images/porridge.png';
import vegetables from '../../assets/images/vegetables.png';
import vegetarianDish from '../../assets/images/vegetarian-dish.png';
import seaFood from '../../assets/images/seaFood.png';
import noodle from '../../assets/images/noodle.png';
import fastfood from '../../assets/images/fastfood.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Category = () => {
    const dataListCategory = [
        {
            id: 1,
            imageCategory: vegetables,
            nameCategory: 'RAU-CỦ-QUẢ',
            numbersProduct: 10
        },
        {
            id: 2,
            imageCategory: vegetarianDish,
            nameCategory: 'MÓN CHAY',
            numbersProduct: 16
        },
        {
            id: 3,
            imageCategory: seaFood,
            nameCategory: 'HẢI SẢN',
            numbersProduct: 256
        },
        {
            id: 4,
            imageCategory: noodle,
            nameCategory: 'PHỞ',
            numbersProduct: 100
        },
        {
            id: 5,
            imageCategory: porridge,
            nameCategory: 'CHÁO',
            numbersProduct: 256
        },
        {
            id: 6,
            imageCategory: fastfood,
            nameCategory: 'ĐỒ ĂN NHANH',
            numbersProduct: 108
        },
        {
            id: 7,
            imageCategory: vegetables,
            nameCategory: 'RAU-CỦ-QUẢ',
            numbersProduct: 10
        },
        {
            id: 8,
            imageCategory: vegetarianDish,
            nameCategory: 'MÓN CHAY',
            numbersProduct: 16
        },
        {
            id: 9,
            imageCategory: seaFood,
            nameCategory: 'HẢI SẢN',
            numbersProduct: 256
        },
        {
            id: 10,
            imageCategory: noodle,
            nameCategory: 'PHỞ',
            numbersProduct: 100
        },
        {
            id: 11,
            imageCategory: porridge,
            nameCategory: 'CHÁO',
            numbersProduct: 256
        },
        {
            id: 12,
            imageCategory: fastfood,
            nameCategory: 'ĐỒ ĂN NHANH',
            numbersProduct: 108
        }

    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    autoplay: true,
                    autoplaySpeed: 4000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='home-category home-container'>
            <div className="list-category">

                <h1>Danh mục sản phẩm</h1>
                <div className="list-category-card">
                    <Slider {...settings}>
                        {
                            dataListCategory && dataListCategory.length > 0
                                ?
                                dataListCategory.map((category) => (
                                    <div className='categoryItem' key={category.id}>
                                        <div className='categoryImage'>
                                            <img src={category.imageCategory} alt="" />
                                        </div>
                                        <div className='categoryContent'>
                                            <h4>{category.nameCategory}</h4>
                                            <p>{category.numbersProduct} sản phẩm</p>
                                        </div>
                                    </div>
                                ))
                                :
                                <div>Loading...</div>
                        }
                    </Slider>
                </div>
            </div>

        </div >
    );
};

export default Category;