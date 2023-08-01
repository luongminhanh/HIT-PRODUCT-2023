import '../assets/scss/components/DetailProduct.scss'
import ReactStars from "react-rating-stars-component";
import Food from '../components/Food'
import Button from '../components/Button';
import Icon from '../components/Icon';
import imgProduct from '../assets/images/productImage.jpg';
import { useState } from 'react';
import FoodSuggestions from '../components/homeUser/FoodSuggestions';
const firstExample = {
    size: 18,
    value: 3,
    edit: false
};

const DetailProduct = () => {
    const handleClickAddToCart = () => {
        console.log("thêm sp vào giỏ");
    }
    const [valueInput, setValueInput] = useState(1);
    const handleValueInput = (e) => {
        setValueInput(e.target.value);
    }
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
        <div className='detail detail-container'>
            <div>
                <div className='detail-product'>
                    <div className='detail-product-image'>
                        <img src={imgProduct} alt="" />
                    </div>
                    <div className='detail-product-infor'>
                        <h3>Canh gà nấm mỡ</h3>
                        <span className='product-rating'><ReactStars {...firstExample} /></span>
                        <span className='shop-address'>194 Bàu Cát, P. 11, Tân Bình, TP. Hồ Chí Minh</span> <br />
                        <div className='detail-product-infor-price'>
                            <span>$70.000VND</span>
                        </div>
                        <hr />
                        <div className='detail-product-infor-number'>
                            <div>
                                <span>Số lượng</span>
                                <div className='detail-product-infor-number-change'>
                                    <Button
                                        className='numberOfProd'
                                        text='-' />
                                    <input value={valueInput} onChange={handleValueInput} />
                                    <Button
                                        className='numberOfProd'
                                        text='+' />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <br />
                        <div className='detail-product-add'>
                            <Button
                                className='detail-product-add-to-cart'
                                text="Thêm vào giỏ hàng"
                                onClick={handleClickAddToCart} />
                            <Button
                                className='detail-product-add-to-buy'
                                text='Đặt hàng'
                                onClick={handleClickAddToCart} />
                        </div> <br />
                        <hr />
                        <div>
                            <ul>
                                <li>Nguyên liệu làm món ăn cam kết là nguyên liệu sạch</li>
                                <li>Giao hàng nhanh</li>
                                <li>Nếu sản phẩm bị lỗi, cửa hàng sẽ hoàn tiền</li>
                            </ul>
                        </div>
                        <hr />
                        <div className="detail-share">
                            <p>Danh mục: <span> Đồ ăn nhanh</span></p>
                            <p>
                                Chia sẻ
                                <Button text={<i className="fa-brands fa-facebook"></i>} />
                                <Button text={<i className="fa-brands fa-facebook-messenger"></i>} />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="detail-description">
                    <div>
                        <div>
                            Mô Tả
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Pariatur minus tempora autem, deserunt ipsa
                            rerum? Vero suscipit tenetur repellat alias unde
                            temporibus eaque ad amet aliquam consectetur eos
                            nemo voluptatum debitis ut obcaecati veniam beatae
                            quibusdam, dolore doloremque! Alias molestiae
                            temporibus sunt reiciendis laboriosam voluptas, aut
                            officiis commodi nostrum sint, enim nulla assumenda
                            consequuntur maxime ad labore fugiat, ipsam illo
                            laborum minus corporis quo? Earum unde consequatur
                            nam cum iusto accusamus amet ullam enim cupiditate
                            totam sunt, nihil quia, rem officiis modi laboriosam
                            voluptatum reiciendis necessitatibus aperiam corporis!
                            Eaque, rem!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Pariatur minus tempora autem, deserunt ipsa
                            rerum? Vero suscipit tenetur repellat alias unde
                            temporibus eaque ad amet aliquam consectetur eos
                            nemo voluptatum debitis ut obcaecati veniam beatae
                            quibusdam, dolore doloremque! Alias molestiae
                            temporibus sunt reiciendis laboriosam voluptas, aut
                            officiis commodi nostrum sint, enim nulla assumenda
                            consequuntur maxime ad labore fugiat, ipsam illo
                            laborum minus corporis quo? Earum unde consequatur
                            nam cum iusto accusamus amet ullam enim cupiditate
                            totam sunt, nihil quia, rem officiis modi laboriosam
                            voluptatum reiciendis necessitatibus aperiam corporis!
                            Eaque, rem!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Pariatur minus tempora autem, deserunt ipsa
                            rerum? Vero suscipit tenetur repellat alias unde
                            temporibus eaque ad amet aliquam consectetur eos
                            nemo voluptatum debitis ut obcaecati veniam beatae
                            quibusdam, dolore doloremque! Alias molestiae
                            temporibus sunt reiciendis laboriosam voluptas, aut
                            officiis commodi nostrum sint, enim nulla assumenda
                            consequuntur maxime ad labore fugiat, ipsam illo
                            laborum minus corporis quo? Earum unde consequatur
                            nam cum iusto accusamus amet ullam enim cupiditate
                            totam sunt, nihil quia, rem officiis modi laboriosam
                            voluptatum reiciendis necessitatibus aperiam corporis!
                            Eaque, rem!
                        </p> <br />
                    </div>
                </div> <hr />
                <div className="detail-similar">
                    <FoodSuggestions
                        title="Món Ăn Tương Tự"
                        data={dataProduct.slice(0, 8)}
                        color='#1e1d23'
                        isHorizontalCard={false}
                        isSlideShow={true}
                    />
                </div>
            </div>
        </div>

    )
}

export default DetailProduct