import './main-page.css';
import data from '../../components/app/data';
import { Link } from 'react-router-dom';

function MainPage() {

    let productSection = data.map((elem, index) => {
        return <section key={index} className='product-section'>
            <img className='product-img' src={elem.img} alt={elem.name}></img>
            <p className='product-name'>{elem.name}</p>
            <p className='product-descr'>{elem.descr}</p>
            <div className='price-block'>
                <p className='price'>{elem.price}<span className='wt'> / {elem.wt}</span></p>
                <button className='add-product'>+</button>
            </div>
        </section>
    });


    return (
        <>
            <header className='header'>
                <h1 className='main-title'>наша продукция</h1>
                <div className='cart'>
                    <p className='count-products'>3 товара на сумму 3 500 ₽</p>
                    <Link to={'/cart'} className='cart__btn'></Link>
                </div>
            </header>
            <main className='main'>
                {productSection}
            </main>
        </>
    );
}

export default MainPage;
