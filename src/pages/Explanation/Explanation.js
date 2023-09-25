import React, { useState } from 'react';
import './Explanation.scss';
import Count from '../../components/Count/Count';
import Delivery from '../../components/Delivery/Delivery';

const Explanation = () => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(5000);

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

          <Count
            count={count}
            setCount={setCount}
            price={price}
            setPrice={setPrice}
          />

          <Delivery />

          <div>
            <button className="basket">장바구니</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explanation;
