import './main-page.css';
import Header from'../../components/header/header'
import data from '../../components/app/data';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function MainPage() {
    const countProducts = useSelector(store => store.countProducts);
    const totalPrice = useSelector(store => store.totalPrice);
    const basketProducts = useSelector(store => store.basketProducts);
    console.log(basketProducts)
    const dispatch = useDispatch();

    function addProduct(data) {
        dispatch({
            type: 'ADD_PRODUCT',
            id: data.id,
            data: data,
            price: data.price
        })
    }
    let productSection = data.map((elem, index) => {
        return <section key={index} className='product-section'>
            <img className='product-img' src={elem.img} alt={elem.name}></img>
            <p className='product-name'>{elem.name}</p>
            <p className='product-descr'>{elem.descr}</p>
            <div className='price-block'>
                <p className='price'>{elem.price} ₽<span className='wt'> / {elem.wt}</span></p>
                <button onClick={() => addProduct(elem)} className='add-product'>+</button>
            </div>
        </section>
    });



    return (
        <>
            <Header 
                countProducts = {countProducts}
                totalPrice = {totalPrice}
            />
            <main className='main'>{productSection}</main>
        </>
    );
}

export default MainPage;
