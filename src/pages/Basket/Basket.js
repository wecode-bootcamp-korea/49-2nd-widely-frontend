import React from 'react';
import './Basket.scss';
import BasketItem from '../../components/BasketItem/BasketItem';
import BasketPrice from '../../components/BasketPrice/BasketPrice';
// import CheckBox from '../../components/CheckBox/CheckBox';
import { useState, useEffect } from 'react';

const Basket = () => {
  const [itemList, setItemList] = useState([]);

  const minus = (id) => {
    // 1. 어떤 item의 마이너스 버튼을 눌렀는지 알아야 함
    // 2. 그 특정 item은 itemList 안에 존재. 그 itemList 안의 item을 찾아서,
    const item = itemList.find((item) => item.id === id);
    // 3. 그 item의 count만 -1 해줘야 함
    if (item.count <= 1) return;
  };

  const plus = (id) => {
    const item = itemList.find((item) => item.id === id);
  };

  useEffect(() => {
    fetch('/data/BasketList/list.json', {
      method: 'GET',
      headers: {
        // Authorization: localStorage.getItem('token'),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setItemList(data);
      });
  }, []);

  return (
    <div className="cartMain">
      <div className="container">
        <div className="btSection">
          <div className="btwrap">
            <h2>장바구니</h2>
          </div>
          <div className="btlist">
            <div className="checkboxWrap">
              <div>
                {/* <div className="checkboxInner">
                  <input className="emptyCheckBox" type="checkbox" />
                  <label className="allChoice">전체선택(0/0)</label>
                  <div>선택삭제</div>
                </div> */}
                <div className="infoWrap">
                  <div className="basketContainer">
                    {itemList.map((item) => {
                      return (
                        <BasketItem
                          key={item.id}
                          item={item}
                          minus={minus}
                          plus={plus}
                        />
                      );
                    })}
                  </div>
                  {/* <BasketItem /> */}
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
