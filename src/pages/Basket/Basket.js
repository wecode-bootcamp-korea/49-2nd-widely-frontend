import React, { useState, useEffect } from 'react';
import BasketItem from '../../components/BasketItem/BasketItem';
import BasketPrice from '../../components/BasketPrice/BasketPrice';
import './Basket.scss';

const Basket = () => {
  const [itemList, setItemList] = useState([]);

  const minus = (id) => {
    // 1. 어떤 item의 마이너스 버튼을 눌렀는지 알아야 함
    // 2. 그 특정 item은 itemList 안에 존재. 그 itemList 안의 item을 찾아서,
    const itemIndex = itemList.findIndex((item) => item.productId === id);

    // 3. 다른 데이터는 그대로 유지하되, 그 item의 count만 -1 해줘야 함
    if (itemList[itemIndex].count <= 1) return;

    const newItemList = [...itemList]; // 불변성, 복사(복제)
    newItemList[itemIndex].count = newItemList[itemIndex].count - 1;

    setItemList(newItemList);
  };

  // const minus = (id) => {
  //   const itemCount = itemList.find((item) => item.id === id).count;

  //   if (itemCount <= 1) return;

  //   fetch(`수량수정 API`, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       productId: id,
  //       count: itemCount - 1,
  //     }),
  //   }).then((res) => {
  //     if (res.ok) {
  //       getCartData();
  //     }
  //   });
  // };

  const plus = (id) => {
    const itemIndex = itemList.findIndex((item) => item.productId === id);

    const newItemList = [...itemList]; // 불변성, 복사(복제)
    newItemList[itemIndex].count = newItemList[itemIndex].count + 1;

    setItemList(newItemList);
  };

  const getCartData = () => {
    fetch('http://10.58.52.64:8000/carts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk2NDA0MzUyfQ.ae5VRN6EjZKE6p4ENeXP8RNOSS9WulpnCiHzSKbCLRM',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setItemList(data.data);
      });
  };

  const deleteCart = (id) => {
    fetch(`http://10.58.52.64:8000/carts/select?productId=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk2NDA0MzUyfQ.ae5VRN6EjZKE6p4ENeXP8RNOSS9WulpnCiHzSKbCLRM',
      },
    }).then((res) => {
      if (res.ok) {
        getCartData();
      }
    });
  };

  useEffect(() => {
    getCartData();
  }, []);

  let totalPrice = 0;

  itemList.forEach((item) => {
    totalPrice = totalPrice + item.price * item.count;
  });

  const deliveryFee = totalPrice >= 30000 ? 0 : 3000;

  return (
    <div className="cartMain">
      <div className="container">
        <div className="btSection">
          <div className="btwrap">
            <h2>장바구니</h2>
          </div>
          {itemList.length === 0 ? (
            <p className="messageWed">장바구니에 담긴 제품이 없습니다</p>
          ) : (
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
                            key={item.productId}
                            item={item}
                            minus={() => minus(item.productId)}
                            plus={() => plus(item.productId)}
                            deleteItem={() => deleteCart(item.productId)}
                          />
                        );
                      })}
                    </div>
                    {/* <BasketItem /> */}
                    <BasketPrice
                      totalPrice={totalPrice}
                      deliveryFee={deliveryFee}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Basket;
