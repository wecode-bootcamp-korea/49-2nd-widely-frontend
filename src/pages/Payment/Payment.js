import React from 'react';
import './Payment.scss';
// import BasketPrice from '../../components/BasketPrice/BasketPrice';
// import { useState } from 'react';

const Payment = () => {
  return (
    <div className="paymentMain">
      <div className="paymentSection">
        <div className="paymentOder">주문서</div>
        <div className="sInfo">
          <h2>주문제품</h2>
        </div>
        <div className="fSection">
          <div className="fInfo">제품을 주문합니다.</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
