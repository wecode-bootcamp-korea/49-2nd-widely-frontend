import React from 'react';
import './BasketItem.scss';
import { useEffect, useState } from 'react';
import Count from '../Count/Count';

const BasketItem = () => {
  const [itemList, setItemList] = useState([]);
  const [count, setCount, price] = useState(1);
  const minus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  // const handlecart = () => {
  //   const cartItem = {
  //     id: id,
  //     image: image,
  //     name: name,
  //     provider: provider,
  //     price: price,
  //     quantity: count,
  //   };
  // };

  useEffect(() => {
    fetch('/data/BasketList/list.json', {
      method: 'GET',
      headers: {
        // Authorization: localStorage.getItem('token'),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setItemList(res);
      });
  }, []);

  return (
    <div className="basketContainer">
      {itemList.map((item) => {
        return (
          <div className="itemLine" key={item.id}>
            <input className="IndividualCheckBox" type="checkbox" />
            <img className="bsItemImage" alt="사진없음" src={item.src} />
            <div className="beItemWrap">
              <span className="bsItemTitle">{item.title}</span>
              <div className="bsCountBox">
                <button onClick={minus}>-</button>
                <span className="bsUp">{count}</span>
                <button
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  +
                </button>
              </div>
              <span className="bsItemPrice">{item.price * count}원</span>
              <img
                className="bsXimage"
                alt="이미지없음"
                src="https://wisely.store/custom/svg/delete_black.svg?1696314054077"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default BasketItem;
