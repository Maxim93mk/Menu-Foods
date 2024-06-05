import '../descr-products/descr-products.css';
import Header from '../header/header';
import { useSelector } from 'react-redux';
import data from '../../components/app/data.js';
import { useLocation } from 'react-router-dom';

function DescrProducts() {

    const countProducts = useSelector(store => store.countProducts);
    const totalPrice = useSelector(store => store.totalPrice);
    const location = useLocation();
    const productAttr = location.state.elem;


    return (
        <>

            <Header
                countProducts={countProducts}
                totalPrice={totalPrice}
            />
            <div className="product-descr">
                <div className="product-descr__left">
                    <img src={productAttr.img} alt={productAttr.name} className='product-descr-img' />
                </div>
                <div className="product-descr__right">
                    <h2 className="product-descr-name">{productAttr.name}</h2>
                    <p className="product-detailed-descr">{productAttr.detailedDescr}</p>
                    <div className="product-add-cart">
                        <p className='product-price'>{productAttr.price} ₽<span className='product-wt'> / {productAttr.wt}</span></p>
                        <button  className='add-product-cart__btn'>В корзину</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DescrProducts;