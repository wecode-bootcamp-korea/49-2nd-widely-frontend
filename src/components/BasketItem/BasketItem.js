import React from 'react';
// import { useEffect, useState } from 'react';
import './BasketItem.scss';

const BasketItem = (props) => {
  const { item, minus, plus } = props;

  return (
    <div className="itemLine">
      {/* <input className="IndividualCheckBox" type="checkbox" /> */}
      <img className="bsItemImage" alt="사진없음" src={item.src} />
      <div className="beItemWrap">
        <span className="bsItemTitle">{item.title}</span>
        <div className="bsCountBox">
          <button onClick={() => minus(item.id)}>-</button>
          <span className="bsUp">{item.count}</span>
          <button onClick={() => plus(item.id)}>+</button>
        </div>
        <span className="bsItemPrice">{item.price * item.count}원</span>
        <img
          className="bsXimage"
          alt="이미지없음"
          src="https://wisely.store/custom/svg/delete_black.svg?1696314054077"
        />
      </div>
    </div>
  );
};
export default BasketItem;
