import React, { useEffect, useState } from 'react';
import './Details.scss';
import Count from '../../components/Count/Count';
import Delivery from '../../components/Delivery/Delivery';
import { useParams } from 'react-router-dom';
import Popup from '../../components/Popup/Popup';

const Details = () => {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState({});
  const params = useParams();

  const [popup, setPopup] = useState(false);

  const basketClick = () => {
    setPopup(true);
  };

  useEffect(() => {
    const productId = Number(params.productId);

    fetch(`http://10.58.52.161:8000/products/${productId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data.data);
      });
  }, [params.productId]);

  return (
    <div className="details">
      <div className="container">
        <div className="imgBox">
          <img src={product.thumbnailImage} alt="제품이미지" />
        </div>

        <div className="decision">
          <p className="brandName">와이들리</p>

          <div className="title">
            <h1>{product.name}</h1>
            <i className="fa-regular fa-heart" />
          </div>

          <p className="assistant">{product.description}</p>
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
            <button className="basket" onClick={basketClick}>
              장바구니
            </button>
          </div>
        </div>
      </div>

      {popup ? <Popup close={() => setPopup(false)} /> : null}
    </div>
  );
};

export default Details;
