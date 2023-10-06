import React, { useState, useEffect } from 'react';
import Input from '../../components/Input/Input';
import BasketPrice from '../../components/BasketPrice/BasketPrice';
import './Payment.scss';

const Payment = () => {
  const [orderData, setOrderData] = useState({});

  const token = localStorage.getItem('token');

  const getCartData = () => {
    fetch('http://10.58.52.82:8000/orders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrderData(data.data);
      });
  };

  // console.log

  useEffect(getCartData, []);

  const {
    firstOrderName,
    totalQuantity,
    name,
    zipcode,
    address1,
    address2,
    point,
  } = orderData;

  return (
    <div className="paymentMain">
      <div className="paymentSection">
        <div>
          <div className="paymentOder">주문서</div>
          <div className="sInfo">
            <h2>주문제품</h2>
          </div>
          <div className="fSection">
            <div className="fInfo">
              {firstOrderName} 외 {totalQuantity - 1}개 상품
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <div className="orderUserContainer">
              <div className="orderUserSection">
                <h2>주문자 정보</h2>
              </div>
            </div>
            <div className="userContentThree">
              <div className="addressName">
                <p className="firstP">
                  <p>
                    주문자 이름
                    <img
                      src="https://wisely.store/custom/img/icon_require.png?1696239194034"
                      alt="필수입력이미지"
                    />
                  </p>
                </p>
                <p className="lastP">
                  <Input className="orderName" value={name} />
                </p>
              </div>
              <div className="addressName">
                <p className="firstP">
                  <p>
                    휴대폰 번호
                    <img
                      src="https://wisely.store/custom/img/icon_require.png?1696239194034"
                      alt="필수입력이미지"
                    />
                  </p>
                </p>
                <p className="lastP">
                  <Input className="orderPhone" />
                  -
                  <Input className="orderPhone" />
                  -
                  <Input className="orderPhone" />
                </p>
              </div>
              <div className="addressPhoneName">
                <p className="topP">
                  <p>
                    이메일
                    <img
                      src="https://wisely.store/custom/img/icon_require.png?1696239194034"
                      alt="필수입력이미지"
                    />
                  </p>
                  <p className="emailP">
                    <Input className="emailPMail" />
                    @
                    <Input className="emailPMail" />
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="orderUserContainer">
            <div className="orderUserSection">
              <h2>배송 정보</h2>
            </div>
            <div />
          </div>
          <div className="userContentThree">
            <div className="addressWrap">
              <span>배송지 선택</span>
              <div className="addressCheck">
                <Input type="checkbox" />
                <span>주문자 정보와 동일</span>
                <Input type="checkbox" checked />
                <span>새로운 배송지</span>
              </div>
            </div>
            <div className="addressHm">
              <p>
                받는사람
                <img
                  src="https://wisely.store/custom/img/icon_require.png?1696239194034"
                  alt="필수입력이미지"
                />
              </p>
              <Input className="writeM" value={name} />
            </div>
            <div className="addressMap">
              <Input className="mapSe" value={zipcode} />
              <button>주소검색</button>
            </div>
            <div className="addressPoint">
              <p>
                주소
                <img
                  src="https://wisely.store/custom/img/icon_require.png?1696239194034"
                  alt="필수입력이미지"
                />
              </p>
              <Input className="addPoint" value={address1} />
            </div>
            <div className="addPointOne">
              <p />
              <Input className="addPointTwo" value={address2} />
            </div>
            <div className="addressPhone">
              <p>
                휴대전화
                <img
                  src="https://wisely.store/custom/img/icon_require.png?1696239194034"
                  alt="필수입력이미지"
                />
              </p>
              <Input className="phoneNum" />
              -
              <Input className="phoneNum" />
              -
              <Input className="phoneNum" />
            </div>
            <div className="addressPl">
              <p>요청사항</p>
              <select>
                <option>-- 메세지 선택 (선택사항) --</option>
                <option>배송 전에 미리 연락바랍니다.</option>
                <option>부재 시 경비실에 미리 연락바랍니다.</option>
                <option>부재 시 문 앞에 맡겨주세요.</option>
                <option>빠른 배송 부탁드립니다.</option>
                <option>택배함에 보관해 주세요.</option>
              </select>
            </div>
          </div>
          <div className="userContentTwo">
            <div className="orderUserContainer">
              <div className="orderUserSection">
                <h2>포인트</h2>
              </div>
            </div>
            <div className="addressChPoint">
              <p>포인트</p>
              <Input className="chPoint" />
              <button className="pointRoding">전액사용</button>
            </div>
            <div className="priceNumber">보유 잔액 {point}원</div>
          </div>
          <div className="lastButton">
            <button className="paymentsButton">0원</button>
          </div>
          {/* <BasketPrice /> */}
        </div>
      </div>
    </div>
  );
};

export default Payment;
