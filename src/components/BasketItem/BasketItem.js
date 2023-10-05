import React from 'react';
import './BasketItem.scss';

const BasketItem = (props) => {
  const { item, minus, plus, deleteItem } = props;

  return (
    <div className="itemLine">
      {/* <input className="IndividualCheckBox" type="checkbox" /> */}
      <img className="bsItemImage" alt={item.product_name} src={item.image} />
      <div className="beItemWrap">
        <span className="bsItemTitle">{item.product_name}</span>
        <div className="bsCountBox">
          <button onClick={minus}>-</button>
          <span className="bsUp">{item.count}</span>
          <button onClick={plus}>+</button>
        </div>
        <span className="bsItemPrice">{item.price * item.count}원</span>
        <img
          className="bsXimage"
          alt="삭제"
          src="../../../data/Image/delete_black.jpg"
          onClick={deleteItem}
        />
      </div>
    </div>
  );
};
export default BasketItem;
