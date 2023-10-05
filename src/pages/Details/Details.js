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
  const productId = Number(params.productId);

  const basketClick = () => {
    setPopup(true);

    fetch('http://10.58.52.64:8000/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk2NDA0MzUyfQ.ae5VRN6EjZKE6p4ENeXP8RNOSS9WulpnCiHzSKbCLRM',
      },
      body: JSON.stringify({
        productId: productId,
        productQty: count,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.massage === 'Insert success') {
          setPopup(true);
        }
      });
  };

  useEffect(() => {
    fetch(`http://10.58.52.78:8000/products/${productId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data.data);
      });
  }, [productId]);

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
