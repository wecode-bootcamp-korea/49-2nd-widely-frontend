import React from 'react';
import './Basket.scss';
import BasketPrice from '../../components/BasketPrice/BasketPrice';
import BasketItem from '../../components/BasketItem/BasketItem';

const Basket = () => {
  return (
    <div className="cartMain">
      <div className="Container">

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
                  <BasketItem />
                  {/* <p className="messageWed">장바구니에 담긴 제품이 없습니다</p> */}
                  <BasketPrice />
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
