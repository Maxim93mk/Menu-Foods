import '../header/header.css'
import { Link } from 'react-router-dom';

function Header(props){


    return (
        <>
        <header className='header'>
                <h1 className='header-title'>НАША ПРОДУКЦИЯ</h1>
                <div className='cart'>
                    <p className='count-products'>{props.countProducts} товара на сумму {props.totalPrice} ₽</p>
                    <Link to={'/cart'} className='cart__btn'></Link>
                    <button className='logout__btn'>Выйти</button>
                </div>
            </header>
        </>
    );

}

export default Header;