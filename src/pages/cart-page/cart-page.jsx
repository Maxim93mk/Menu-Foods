import './cart-page.css';
import data from '../../components/app/data';

function CartPage() {

    let productList = data.map((elem, index) => {
        return <section key={index} className='cart-product'>
            <div className='cart-product-left'>
                <img className='cart-product-img' src={elem.img} alt={elem.name}></img>
                <p className='cart-product-left__descr'>{elem.name}</p>
            </div>
            <div className='cart-product-right'>
                <p className='cart-product-right__price'>{elem.price}</p>
                <button className='cart-product-right__deleteProduct'></button>
            </div>
        </section>
    });


    return (
        <>
            <header className='cart-header'>
                <button className='cart-header__back-btn'></button>
                <h1 className='cart-header__title'>КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ</h1>
            </header>
            <main className='cart-main'>{productList}</main>
            <footer className='cart-footer'>
                <p className='cart-footer_descr-summ'>ЗАКАЗ НА СУММУ: <span className='cart-footer_summ'>XXX</span></p>
                <button className='cart-footer__order-btn'>Оформить заказ</button>
            </footer>
        </>
    );
}

export default CartPage;
