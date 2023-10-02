import React, { useState } from 'react';
import './Popup.scss';
import { useNavigate } from 'react-router-dom';

const Popup = () => {
  const navigate = useNavigate();

  const moveToAll = () => {
    navigate('/');
  };

  const moveToBasket = () => {
    navigate('/basket');
  };

  return (
    <div className="popup">
      <div className="explanation">
        상품이 장바구니에 담겼습니다.
        <br />
        <br />
        계속 쇼핑을 진행하겠습니까?
      </div>
      <div className="choice">
        <button onClick={moveToAll}>계속 둘러볼게요.</button>
        <button onClick={moveToBasket}>장바구니로 이동할래요.</button>
      </div>
    </div>
  );
};

export default Popup;
