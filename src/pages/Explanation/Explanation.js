import React from 'react';
import './Explanation.scss';
const Explanation = () => {
  return (
    <div className="explanation">
      <div className="container">
        <div className="imgBox">
          <img src="https://www.wisely.store/web/product/big/202308/9b2740d1efffb5e04802067fb279b8cc.png" />
        </div>

        <div className="decision">
          <p className="brandName">와이들리 면도기</p>

          <div className="title">
            <h1>와이즐리 5중날 면도날 리필 4P</h1>
            <i className="fa-regular fa-heart" />
          </div>

          <p className="assistant">
            독일, 미국의 엔지니어들이 만든 프리미엄 5중날
          </p>
          <span className="price">5.000원</span>

          <div className="countBoxAll">
            <p>와이즐리 5중날 면도날 리필 4P</p>
            <div>
              <div className="countBox">
                <span>5.000원</span>
                <button>+</button>
                <span>0</span>
                <button>-</button>
              </div>
            </div>
          </div>

          <div className="totalPriceBox">
            <span>총 금액</span>
            <span className="totalPrice">10.000원</span>
          </div>

          <div className="deliveryBox">
            <div className="a">4만원 이상 구매 시 무료배송</div>
            <div className="deliveryPrice">
              <div className="d">배송비</div>
              <div className="deliverySmallBox">
                <span className="b">무료배송까지남은금액</span>
                <span className="c">9월 한정 혜택입니다</span>
              </div>
            </div>
          </div>

          <div>
            <button className="basket">장바구니</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explanation;
