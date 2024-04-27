import MainPage from '../../pages/main-page/main-page';
import CartPage from '../../pages/cart-page/cart-page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
