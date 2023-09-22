import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import Product from './pages/Product/Product';
import Explanation from './pages/Explanation/Explanation';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/explanation" element={<Explanation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
