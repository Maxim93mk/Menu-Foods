import './main-page.css';
import Header from './header/header';
import data from './../../components/app/data';

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
            <Header />
            <main className='main'>
                {productSection}
            </main>
        </>
    );
}

export default MainPage;
