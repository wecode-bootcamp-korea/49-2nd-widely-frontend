import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import ProductCard from './components/ProductCard/ProductCard';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/card" element={<ProductCard />} />;
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
