import MainPage from '../../pages/main-page/main-page';
import CartPage from '../../pages/cart-page/cart-page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { reducer } from '../../store';
import { Provider } from 'react-redux';
import { createStore } from '@reduxjs/toolkit';


function App() {
  const store = createStore(reducer)
  return (
    <>
    <Provider store = {store}>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </Router>
      </Provider>
    </>
  );
}

export default App;
