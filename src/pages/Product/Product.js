import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Goods from '../../components/Goods/Goods';
import './Product.scss';

const Product = () => {
  const [data, setData] = useState({});
  const [sort, setSort] = useState(sortingList[0].value);
  const params = useParams();

  const changeSort = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    console.log('reload');
    fetch(
      `http://10.58.52.161:8000/products?category=${params.category}&sort=${sort}&page=1`,
    )
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setData(result.data);
      });
  }, [params.category, sort]);

  if (!Object.keys(data).length > 0) return null;

  return (
    <div className="product">
      <div className="goodsContainer">
        <h1>{data.category}</h1>
        <div className="total">
          <p>{`총 ${data.total} 개`}</p>

          <select className="select" onChange={changeSort}>
            {sortingList.map((list) => {
              return (
                <option key={list.id} value={list.value}>
                  {list.name}
                </option>
              );
            })}
          </select>
        </div>
        <Goods data={data} />
      </div>
    </div>
  );
};

export default Product;

const sortingList = [
  {
    id: 0,
    name: '신상품',
    value: 'latest',
  },
  {
    id: 1,
    name: '낮은가격',
    value: 'lowprice',
  },
  {
    id: 2,
    name: '높은가격',
    value: 'highprice',
  },
];
