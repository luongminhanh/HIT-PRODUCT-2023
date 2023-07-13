import img from '../assets/images/imageLogin.jpg'
import '../assets/scss/components/DetailProduct.scss'
import ReactStars from "react-rating-stars-component";
import Food from '../components/Food'
const firstExample = {
    size: 35,
    value: 3,
    edit: false
};

const DetailProduct = () => {
    return (
        <>
            <div className='detail-product'>
                <div className='detail-product-image'>
                    <img src={img} />
                </div>
                <div className='detail-product-infor'>
                    <span>Trang chủ >> HCM</span>
                    <h3>Canh gà nấm mỡ</h3>
                    <span>194 Bàu Cát, P. 11, Tân Bình, TP. Hồ Chí Minh</span>
                    <span><ReactStars {...firstExample} /></span>
                    <span>Nguyên liệu: nấm mỡ, thịt gà, hành, cà rốt, ...</span>
                    <div className='detail-product-infor-price'>
                        <span>70.000đ</span>
                    </div>
                    <div className='detail-product-infor-number'>
                        <span>Số lượng</span>
                        <div className='detail-product-infor-number-change'>
                            <button>-</button>
                            <input value='1' />
                            <button>+</button>
                        </div>
                    </div>
                    <div className='detail-product-add'>
                        <button className='detail-product-add-to-buy'>Đặt hàng</button>
                        <button className='detail-product-add-to-cart'>Thêm vào giỏ hàng</button>
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
                        <i class="fa-solid fa-phone-volume"></i>
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