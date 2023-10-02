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
      <div className="goods">
        {data.list.map((item) => {
          return (
            <div className="goodsProduct" key={item.id}>
              <img
                className="imgSize"
                src={`${item.thumbnailImage}`}
                alt="상품이미지"
                onClick={() => showDetail(item.id)}
              />
              <span className="price">
                {`${item.price.toLocaleString('ko-KR')}원 `}
              </span>
              <p
                className="title"
                onClick={() => showDetail(item.id)}
              >{`${item.name}`}</p>
              <span className="Description">{`${item.description}`}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Goods;
