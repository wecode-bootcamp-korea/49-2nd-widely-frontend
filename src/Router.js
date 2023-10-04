import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import Product from './pages/Product/Product';
import Details from './pages/Details/Details';
import Footer from './components/Footer/Footer';
import Basket from './pages/Basket/Basket';
import FindId from './pages/FindUser/FindId/FindId';
import FindPw from './pages/FindUser/FindPw/FindPw';
import JoinDone from './pages/JoinDone/JoinDone';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/main" element={<Main />} />
        <Route path="/product/:category" element={<Product />} />
        <Route path="/details/:productId" element={<Details />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/find_id" element={<FindId />} />
        <Route path="/fInd_pw" element={<FindPw />} />
        <Route path="/done" element={<JoinDone />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
