import React, { useEffect, useState } from 'react';
import './Details.scss';
import Count from '../../components/Count/Count';
import Delivery from '../../components/Delivery/Delivery';
import { useNavigate, useParams } from 'react-router-dom';

const Details = () => {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const params = useParams();

  const basketClcik = () => {
    navigate('/basket');
  };

  useEffect(() => {
    const productId = Number(params.productId);

    fetch('/data/product/all.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const list = data.list;
        for (let i = 0; i < list.length; i++) {
          if (list[i].id === productId) {
            setProduct(list[i]);
          }
        }
      });
  }, [params.productId]);

  return (
    <div className="details">
      <div className="container">
        <div className="imgBox">
          <img src={product.img} alt="제품이미지" />
        </div>

        <div className="decision">
          <p className="brandName">와이들리 면도기</p>

          <div className="title">
            <h1>{product.title}</h1>
            <i className="fa-regular fa-heart" />
          </div>

          <p className="assistant">{product.Description}</p>
          <span className="price">
            {product.price?.toLocaleString('ko-KR')} 원
          </span>

          <Count
            count={count}
            setCount={setCount}
            price={product.price}
            title={product.title}
          />

          <Delivery />

          <div>
            <button className="basket" onClick={basketClcik}>
              장바구니
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
