import React from 'react';
import './Basket.scss';

const Basket = () => {
  return (
    <div className="cartMain">
      <div className="topContainer">
        <header className="test1">테스트구역</header>
        <div>테스트구역2</div>
      </div>
      <div className="buttomContainer">
        <div className="btSection">
          <div className="btwrap">
            <h2>장바구니</h2>
          </div>
          <div className="btlist">
            <div className="checkboxWrap">
              <div>
                <div className="checkboxInner">
                  <input className="emptyCheckBox" type="checkbox" />
                  <label className="allChoice">전체선택(0/0)</label>
                  <div>선택삭제</div>
                </div>
                <div className="infoWrap">
                  <p className="messageWed">장바구니에 담긴 제품이 없습니다</p>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
