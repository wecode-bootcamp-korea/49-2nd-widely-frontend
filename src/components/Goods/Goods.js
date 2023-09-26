import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Goods.scss';

const Goods = (props) => {
  const { data } = props;

  return (
    <div>
      <h1>{data.category}</h1>
      <div className="total">
        <p>{`총 ${data.total} 개`}</p>

        <select className="select">
          <option>-정렬 방식-</option>
          <option>신상품</option>
          <option>낮은가격</option>
          <option>높은가격</option>
        </select>
      </div>
      <div className="goods">
        {data.list.map((item) => {
          return (
            <div className="goodsProduct" key={item}>
              <img className="imgSize" src={`${item.img}`} alt="상품이미지" />
              <span className="price"> {`${item.price}`}</span>
              <p className="title">{`${item.title}`}</p>
              <span className="Description">{`${item.Description}`}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Goods;
