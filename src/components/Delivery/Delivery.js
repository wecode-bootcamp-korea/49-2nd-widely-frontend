import React from 'react';
import './Delivery.scss';

const Delivery = () => {
  return (
    <div className="deliveryBox">
      <div className="a">4만원 이상 구매 시 무료배송</div>
      <div className="deliveryPrice">
        <div className="d">배송비</div>
        <div className="deliverySmallBox">
          <span className="b">9월 한정 혜택입니다.</span>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
