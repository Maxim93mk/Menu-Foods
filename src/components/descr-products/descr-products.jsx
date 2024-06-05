import '../descr-products/descr-products.css';
import Header from '../header/header';
import { useSelector } from 'react-redux';
import data from '../../components/app/data.js';

function DescrProducts(props) {

    const countProducts = useSelector(store => store.countProducts);
    const totalPrice = useSelector(store => store.totalPrice);

    console.log(props)

    return (
        <>

            <Header
                countProducts={countProducts}
                totalPrice={totalPrice}
            />
            <div className="product-descr">
                <div className="product-descr__left">
                    <img src={props.img} alt={props.name} className='product-descr-img' />
                </div>
                <div className="product-descr__right">
                    <h2 className="product-descr-name">{props.name}</h2>
                    <p className="product-detailed-descr">{props.detailedDescr}</p>
                    <div className="product-add-cart">
                        <p className='product-price'>{props.price} ₽<span className='product-wt'> / {props.wt}</span></p>
                        <button  className='add-product-cart__btn'>В корзину</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DescrProducts;