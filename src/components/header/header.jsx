import '../header/header.css'
import { Link } from 'react-router-dom';

function Header(props){

    function logout() {
        sessionStorage.clear();
        window.location.href = '/';
    }

    return (
        <>
        <header className='header'>
                <h1 className='header-title'>НАША ПРОДУКЦИЯ</h1>
                <div className='cart'>
                    <p className='count-products'>{props.countProducts} товара на сумму {props.totalPrice} ₽</p>
                    <Link to={'/cart'} className='cart__btn'></Link>
                    <Link className='logout__btn'
                    onClick={logout}>Выйти</Link>
                </div>
            </header>
        </>
    );

}

export default Header;