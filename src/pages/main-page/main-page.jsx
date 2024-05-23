import './main-page.css';
import data from '../../components/app/data';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function MainPage() {
    const countProducts = useSelector(store => store.countProducts);
    const totalPrice = useSelector(store => store.totalPrice);
    const dispatch = useDispatch();

    function addProduct(id, data) {
        dispatch({
            type: 'ADD_PRODUCT',
            id: data.id,
            priceItem: Number(data.price.slice(0, data.price.length - 1).replace(' ', '')),
            data: data
        })
    }


    let productSection = data.map((elem, index) => {
        return <section key={index} className='product-section'>
            <img className='product-img' src={elem.img} alt={elem.name}></img>
            <p className='product-name'>{elem.name}</p>
            <p className='product-descr'>{elem.descr}</p>
            <div className='price-block'>
                <p className='price'>{elem.price}<span className='wt'> / {elem.wt}</span></p>
                <button onClick={() => addProduct(index, elem)} className='add-product'>+</button>
            </div>
        </section>
    });


    return (
        <>
            <header className='header'>
                <h1 className='main-title'>Наша продукция</h1>
                <div className='cart'>
                    <p className='count-products'>{countProducts} товара на сумму {totalPrice} ₽</p>
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
