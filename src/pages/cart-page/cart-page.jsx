import './cart-page.css';

function CartPage() {



    return (
        <>
            <header className='cart-header'>
                <button className='cart-header__back-btn'></button>
                <h1 className='cart-header__title'>КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ</h1>
            </header>
            <footer className='cart-footer'>
                <p className='cart-footer_descr-summ'>ЗАКАЗ НА СУММУ: <span className='cart-footer_summ'>XXX</span></p>
                <button className='cart-footer__order-btn'>Оформить заказ</button>
            </footer>
        </>
    );
}

export default CartPage;
