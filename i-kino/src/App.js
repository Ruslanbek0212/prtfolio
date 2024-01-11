import React from 'react';
import Navbar from './components/Navbar';
import AddProduct from './pages/AddProduct';
import { Routes, Route } from 'react-router-dom'
import Product from './pages/Product';
import ProductInfo from './pages/ProductInfo';
import Update from './pages/Update';
import Register from './pages/Registr'
import Account from './pages/Account';

function App(props) {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/product' element={<Product />} />
        <Route path='/register' element={<Register/> } />
        <Route path='/account' element={<Account/> } />
        <Route path='/productInfo/:id' element={<ProductInfo />} />
        <Route path='/productInfoUpdate/:id' element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;


/// backend.payme.uz/users
/// backend.payme.uz/transatction
/// backend.payme.uz/categroy
/// backend.payme.uz/categroy/categroyInfo