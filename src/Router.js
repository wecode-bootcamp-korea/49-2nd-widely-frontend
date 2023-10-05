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
<<<<<<< HEAD
import FindId from './pages/FindUser/FindId/FindId';
import FindPw from './pages/FindUser/FindPw/FindPw';
import JoinDone from './pages/JoinDone/JoinDone';
=======
import Payment from './pages/Payment/Payment';
import Search from './pages/Search/Search';
import ScrollToTop from './components/ScrollTop/ScrollTop';
>>>>>>> b80b600876ebcde6c10c6670d5c0a37d9c4b081d

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/main" element={<Main />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:productId" element={<Details />} />
        <Route path="/search" element={<Search />} />
        <Route path="/basket" element={<Basket />} />
<<<<<<< HEAD
        <Route path="/find_id" element={<FindId />} />
        <Route path="/fInd_pw" element={<FindPw />} />
        <Route path="/done" element={<JoinDone />} />
=======
        <Route path="/payment" element={<Payment />} />
>>>>>>> b80b600876ebcde6c10c6670d5c0a37d9c4b081d
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
