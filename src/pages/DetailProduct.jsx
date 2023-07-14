import img from '../assets/images/imageLogin.jpg'
import '../assets/scss/components/DetailProduct.scss'
import ReactStars from "react-rating-stars-component";
import Food from '../components/Food'
import Button from '../components/Button';
import Icon from '../components/Icon';
const firstExample = {
    size: 35,
    value: 3,
    edit: false
};

const DetailProduct = () => {
    const handleClickAddToCart = () => {
        console.log("thêm sp vào giỏ");
    }
    return (
        <>
            <div className='detail-product'>
                <div className='detail-product-image'>
                    <img src={img} />
                </div>
                <div className='detail-product-infor'>
                    <span className='navigate-address'>Trang chủ >> HCM</span>
                    <h3>Canh gà nấm mỡ</h3>
                    <span className='shop-address'>194 Bàu Cát, P. 11, Tân Bình, TP. Hồ Chí Minh</span>
                    <span className='product-rating'><ReactStars {...firstExample} /></span>
                    <span className='product-components'>Nguyên liệu: nấm mỡ, thịt gà, hành, cà rốt, ...</span>
                    <div className='detail-product-infor-price'>
                        <span>70.000đ</span>
                    </div>
                    <div className='detail-product-infor-number'>
                        <span>Số lượng</span>
                        <div className='detail-product-infor-number-change'>
                            <Button
                                className='numberOfProd'
                                text='-' />
                            <input value='1' />
                            <Button
                                className='numberOfProd'
                                text='+' />
                        </div>
                    </div>
                    <div className='detail-product-add'>
                        <Button
                            className='detail-product-add-to-cart'
                            text="Thêm vào giỏ hàng"
                            onClick={handleClickAddToCart} />
                        <Button
                            className='detail-product-add-to-buy'
                            text='Đặt hàng'
                            onClick={handleClickAddToCart} />
                    </div>
                </div>
            </div>
            <div className='shop-infor'>
                <div className='shop-infor-image'>
                    <img src={img} />
                </div>
                <div className='shop-infor-detail'>
                    <span>Quán Thảo Béo</span>
                    <span className='shop-infor-detail-online'>Đang hoạt động</span>
                    <div className='shop-infor-detail-phone'>
                        <Icon className='fa-solid fa-phone-volume' />
                        <span>0123456789</span>
                    </div>
                </div>
            </div>
            <div className='detail-product-more'>
                <div className='detail-product-more-title'>Menu</div>
                <div className='detail-product-more-main'>
                    <div className='detail-product-more-main-menu'>
                        <ul>
                            <li>Rau củ quả</li>
                            <li>Món chay</li>
                            <li>Hải sản</li>
                            <li>Phở</li>
                            <li>Đồ ăn nhanh</li>
                        </ul>
                    </div>
                    <div className='detail-product-more-main-products'>
                        <div className='detail-product-more-main-products-search'>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type='text' />
                        </div>
                        <div className="detail-product-more-main-products-title">
                            Rau củ quả
                        </div>
                        <div className="detail-product-more-main-products-main">
                            <Food />
                            <Food />
                            <Food />
                            <Food />
                            <Food />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default DetailProduct