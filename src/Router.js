import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import Product from './pages/Product/Product';
import Details from './pages/Details/Details';
import Footer from './components/Footer/Footer';
import Basket from './pages/Basket/Basket';
import Search from './pages/Search/Search';
import ScrollToTop from './components/ScrollTop/ScrollTop';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:productId" element={<Details />} />
        <Route path="/search" element={<Search />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
