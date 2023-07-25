import React from 'react'
import Header from '../components/Header';
import Banner from '../components/homeUser/Banner';
import Category from '../components/homeUser/Category';
import vegetables from '../assets/images/vegetables.png';
import seaFood from '../assets/images/seaFood.png';
import FoodSuggestions from '../components/homeUser/FoodSuggestions';
import Information from '../components/homeUser/information';


const Home = () => {
  const dataProduct = [
    {
      id: 1,
      image: vegetables,
      productName: "Nho Mỹ",
      address: "790 Đường Láng, Đống Đa, Hà Nội",
      price: "70.000"
    },
    {
      id: 2,
      image: vegetables,
      productName: "Nho Mỹ",
      address: "790 Đường Láng, Đống Đa, Hà Nội",
      price: "70.000"
    },
    {
      id: 3,
      image: vegetables,
      productName: "Nho Mỹ",
      address: "790 Đường Láng, Đống Đa, Hà Nội",
      price: "70.000"
    },
    {
      id: 4,
      image: vegetables,
      productName: "Nho Mỹ",
      address: "790 Đường Láng, Đống Đa, Hà Nội",
      price: "70.000"
    },
    {
      id: 5,
      image: seaFood,
      productName: "Nho Mỹ",
      address: "790 Đường Láng, Đống Đa, Hà Nội",
      price: "70.000"
    },
    {
      id: 6,
      image: seaFood,
      productName: "Nho Mỹ",
      address: "790 Đường Láng, Đống Đa, Hà Nội",
      price: "70.000"
    },
    {
      id: 7,
      image: seaFood,
      productName: "Nho Mỹ",
      address: "790 Đường Láng, Đống Đa, Hà Nội",
      price: "70.000"
    },
    {
      id: 8,
      image: seaFood,
      productName: "Nho Mỹ",
      address: "790 Đường Láng, Đống Đa, Hà Nội",
      price: "70.000"
    }
  ]
  return (
    <div>
      <Header />
      <div className='home'>
        <Banner />
        <Category />
        <FoodSuggestions
          title="Gợi ý món ăn"
          data={dataProduct}
          className='bgColorImage'
          color='#fff'
          isSlideShow={false}

        />
        <FoodSuggestions
          title="Món ăn phổ biến"
          data={dataProduct.slice(0, 4)}
          className='bgColorWhite'
          color='#1e1d23'
          isSlideShow={false}
        />
        <Information />
      </div>
    </div >
  )
}

export default Home