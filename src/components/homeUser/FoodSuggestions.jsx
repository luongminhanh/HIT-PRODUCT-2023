import React from 'react';
import Card from '../Card';
import Button from '../Button';
import Slider from "react-slick";
import HorizontalCard from '../HorizontalCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';


const FoodSuggestions = ({ title, data, className, container, color, isHorizontalCard, isSlideShow }) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const navigate = useNavigate();
    return (
        <div className={className}>
            <div className='foodSuggestions foodSuggestions-container'>
                <div className={container}>
                    <div>
                        <h1 style={{ color: color }}>{title}</h1>
                    </div>
                    <div >
                        {
                            isSlideShow ?
                                <>

                                    {
                                        isHorizontalCard ?
                                            <>
                                                <Slider {...settings}>

                                                    {
                                                        data && data.length > 0
                                                        &&
                                                        data.map(productItem => (
                                                            <HorizontalCard
                                                                key={productItem.id}
                                                                image={productItem.image}
                                                                productName={productItem.name}
                                                                price={productItem.price}
                                                            />
                                                        ))
                                                    }
                                                </Slider>

                                            </>
                                            :
                                            <>
                                                <Slider {...settings}>

                                                    {
                                                        data && data.length > 0
                                                        &&
                                                        data.map(productItem => (
                                                            <Card
                                                                key={productItem.id}
                                                                image={productItem.image}
                                                                productName={productItem.name}
                                                                address={productItem.address}
                                                                price={productItem.price}
                                                            />
                                                        ))
                                                    }
                                                </Slider>

                                            </>
                                    }

                                </>
                                :
                                <div className='listProduct'>
                                    {
                                        isHorizontalCard ?
                                            <>
                                                {
                                                    data && data.length > 0
                                                    &&
                                                    data.map(productItem => (
                                                        <HorizontalCard
                                                            key={productItem.id}
                                                            image={productItem.image}
                                                            productName={productItem.name}
                                                            price={productItem.price}
                                                        />
                                                    ))
                                                }
                                            </>
                                            :
                                            <>
                                                {
                                                    data && data.length > 0
                                                    &&
                                                    data.map(productItem => (
                                                        <Card
                                                            key={productItem.id}
                                                            image={productItem.image}
                                                            productName={productItem.name}
                                                            address={productItem.address}
                                                            price={productItem.price}
                                                        />
                                                    ))
                                                }
                                            </>
                                    }
                                </div>
                        }
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button onClick={() => navigate('/search')} text='Xem thêm' className='showMore' />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FoodSuggestions;