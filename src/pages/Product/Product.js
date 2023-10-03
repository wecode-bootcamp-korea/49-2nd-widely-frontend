import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Goods from '../../components/Goods/Goods';
import './Product.scss';

const Product = () => {
  const [data, setData] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`/data/product/${params.category}.json`)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setData(result);
      });
  }, [params.category]);

  if (!Object.keys(data).length > 0) return null;

  return (
    <div className="product">
      <div className="goodsContainer">
        <Goods data={data} />
      </div>
    </div>
  );
};

export default Product;
