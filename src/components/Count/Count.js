import React from 'react';
import './Count.scss';
const Count = (props) => {
  const { count, setCount, price, title } = props;
  const minus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="countAll">
        <p>{title}</p>
        <div>
          <div className="countBox">
            <span>{(price * count).toLocaleString('ko-KR')} 원</span>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
            <span>{count}</span>
            <button onClick={minus}>-</button>
          </div>
        </div>
      </div>
      <div className="totalPriceBox">
        <span>총 금액</span>
        <span className="totalPrice">
          {(price * count).toLocaleString('ko-KR')}
        </span>
      </div>
    </>
  );
};

export default Count;
