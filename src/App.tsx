import React from 'react';
import logo from './logo.svg';
import { Navbar } from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Home } from './pages/home/Home';
import { ProductPage } from './pages/product/ProductPage';
import { Store } from './pages/store/Store';
import { About } from './pages/about/About';
import { Login } from './pages/login/Login';
import { AddProduct } from './containers/product/AddProduct';
import { ProductTable } from './containers/product/ProductTable';

function App() {
  return (
    <div className='bg-backgroundColor'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product-page' element={<ProductPage />} />
          <Route path='/store' element={<Store />} />
          <Route path='/aboutUs' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/view-all-product' element={<ProductTable />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
