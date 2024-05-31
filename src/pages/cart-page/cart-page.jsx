import './cart-page.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function CartPage() {
    const totalPrice = useSelector(store => store.totalPrice);
    const basketProducts = useSelector(store => store.basketProducts);
    // console.log(basketProducts);
    const dispatch = useDispatch();

    function RemoveProduct(e, data) {
        dispatch({
            type: 'REMOVE_PRODUCT',
            priceItem: Number(data.price.slice(0, data.price.length - 1).replace(' ', '')),
            // data: data,
            id: parseFloat(e.target.id),

        })
    }
    let productList = basketProducts.map((elem, index) => {
        // elem.id = Math.random()
        return <section key={index} className='cart-product'>
            <div className='cart-product-left'>
                <img className='cart-product-img' src={elem.img} alt={elem.name}></img>
                <p className='cart-product-left__descr'>{elem.name}</p>
            </div>
            <div className='cart-product-right'>
                <p className='cart-product-right__price'>{elem.price}</p>
                <button id = {index} onClick={(e) => RemoveProduct(e, elem)} className='cart-product-right__deleteProduct'></button>
            </div>
        </section>
    });

    return (
        <>
            <header className='cart-header'>
                <Link to={'/'} className='cart-header__back-btn'></Link>
                <h1 className='cart-header__title'>КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ</h1>
            </header>
            <main className='cart-main'>{productList}</main>
            <footer className='cart-footer'>
                <p className='cart-footer_descr-summ'>ЗАКАЗ НА СУММУ: <span className='cart-footer_summ'>{totalPrice} ₽</span></p>
                <button className='cart-footer__order-btn'>Оформить заказ</button>
            </footer>
        </>
    );
}

export default CartPage;
