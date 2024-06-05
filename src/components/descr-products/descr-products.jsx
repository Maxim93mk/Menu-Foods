import '../descr-products/descr-products.css';
import Header from '../header/header';
import { useSelector } from 'react-redux';
import data from '../../components/app/data.js';

function DescrProducts() {

    const countProducts = useSelector(store => store.countProducts);
    const totalPrice = useSelector(store => store.totalPrice);

    console.log(data)

    return (
        <>

            <Header
                countProducts={countProducts}
                totalPrice={totalPrice}
            />
            <div className="product-descr">
                <div className="product-descr__left">
                    <img src={data[1].img} alt={data[1].name} className='product-descr-img' />
                </div>
                <div className="product-descr__right">
                    <h2 className="product-descr-name">{data[1].name}</h2>
                    <p className="product-detailed-descr">{data[0].detailedDescr}</p>
                    <div className="product-add-cart">
                        <p className='product-price'>{data[0].price} ₽<span className='product-wt'> / {data[0].wt}</span></p>
                        <button className='add-product-cart__btn'>В корзину</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DescrProducts;