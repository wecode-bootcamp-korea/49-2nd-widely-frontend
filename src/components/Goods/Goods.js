import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Goods.scss';

const Goods = (props) => {
  const { data } = props;

  const navigate = useNavigate();

  const showDetail = (id) => {
    navigate(`/details/${id}`);
  };

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
            <div className="goodsProduct" key={item.id}>
              <img
                className="imgSize"
                src={`${item.img}`}
                alt="상품이미지"
                onClick={() => showDetail(item.id)}
              />
              <span className="price">
                {`${item.price.toLocaleString('ko-KR')}원 `}
              </span>
              <p
                className="title"
                onClick={() => showDetail(item.id)}
              >{`${item.title}`}</p>
              <span className="Description">{`${item.Description}`}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Goods;
