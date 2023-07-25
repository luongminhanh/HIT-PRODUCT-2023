import React, { Component } from 'react';
import Card from '../Card';
import Button from '../Button';
import Slider from "react-slick";


const FoodSuggestions = ({ title, data, className, color, isSlideShow }) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className={className}>
            <div className='foodSuggestions home-container'>
                <div>
                    <h1 style={{ color: color }}>{title}</h1>
                    <div className='listProduct'>
                        {
                            isSlideShow ?
                                <Slider {...settings}>
                                    {/* {
                                        // data && data.length > 0
                                        // &&
                                        // data.map(productItem => (
                                        //     <Card
                                        //         key={productItem.id}
                                        //         image={productItem.image}
                                        //         productName={productItem.productName}
                                        //         address={productItem.address}
                                        //         price={productItem.price}
                                        //     />
                                        // ))
                                        <div>100</div>
                                    } */}
                                    <div key={1}>
                                        <h3>1</h3>
                                    </div>
                                    <div key={2}>
                                        <h3>2</h3>
                                    </div>
                                    <div>
                                        <h3>3</h3>
                                    </div>
                                    <div key={3}>
                                        <h3>4</h3>
                                    </div>
                                    <div key={4}>
                                        <h3>5</h3>
                                    </div>
                                    <div key={5}>
                                        <h3>6</h3>
                                    </div>
                                </Slider>
                                :
                                <>
                                    {
                                        data && data.length > 0
                                        &&
                                        data.map(productItem => (
                                            <Card
                                                key={productItem.id}
                                                image={productItem.image}
                                                productName={productItem.productName}
                                                address={productItem.address}
                                                price={productItem.price}
                                            />
                                        ))
                                    }
                                </>
                        }
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button text='Xem thêm' className='showMore' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodSuggestions;