import React from 'react';
import './BasketPrice.scss';

// import Button from '../components/Button/Button';

const BasketPrice = () => {
  return (
    <div className="orderInfo">
      <div className="bsTotalBox">
        <div className="bsTotalPrice">
          <span>합계</span>
          <span>원</span>
        </div>
        <div className="bsDcPrice">
          <span>상품할인금액</span>
          <span>-원</span>
        </div>
        <div className="bsDeliveryPrice">
          <span>배송비</span>
          <span>+원</span>
        </div>
        <div className="bsTotal">
          <span>결제예정금액</span>
          <span>0원</span>
        </div>
      </div>
      <button className="bsChBtn">제품을 담아주세요</button>
      <span className="couponAlram">
        ˑ 쿠폰과 적립금은 결제 페이지에서 적용할 수 있어요
      </span>
    </div>
  );
};

export default BasketPrice;
