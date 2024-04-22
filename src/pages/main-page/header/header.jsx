import './header.css';

function Header() {
    return (
        <>
            <header className='header'>
                <h1 className='main-title'>наша продукция</h1>
                <div className='cart'>
                    <p className='count-products'>3 товара на сумму 3 500 ₽</p>
                    <button className='cart__btn'></button>
                </div>
            </header>
        </>
    );
}

export default Header;
