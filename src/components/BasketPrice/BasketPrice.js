import React from 'react';
import './BasketPrice.scss';
import { useState } from 'react';

const BasketPrice = ({ totalPrice, deliveryFee }) => {
  const [OrderInfo, setOrderInfo] = useState({});

  const fetchOrderInfo = () => {
    const userData = {
      data: {
        addressName: '',
        recipientName: '',
        phoneNumber: '',
        zipcode: '',
        address1: '',
        address2: '',
      },
    };

    setOrderInfo(userData);
  };

  return (
    <div className="orderInfo">
      <div className="bsTotalBox">
        <div className="bsTotalPrice">
          <span>합계</span>
          <span>{totalPrice.toLocaleString('ko-KR')} 원</span>
        </div>
        <div className="bsDcPrice">
          <span>상품할인금액</span>
          <span>- 0원</span>
        </div>
        <div className="bsDeliveryPrice">
          <span>배송비</span>
          <span>+{deliveryFee.toLocaleString('ko-KR')}원</span>
        </div>
        <div className="bsTotal">
          <span>결제예정금액</span>
          <span>0원</span>
        </div>
      </div>
      <button className="bsChBtn" onClick={fetchOrderInfo}>
        구매하기
      </button>
      <span className="couponAlram">
        ˑ 쿠폰과 적립금은 결제 페이지에서 적용할 수 있어요
      </span>
    </div>
  );
};

export default BasketPrice;
