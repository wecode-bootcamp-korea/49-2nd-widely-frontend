import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Search.scss';
import { _searchProduct } from '../../api';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [dataList, setDataList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  useEffect(() => {
    const keyword = searchParams.get('keyword');
    // fetch(`http://10.58.52.82:8000/search?keyword=${keyword}`)
    //   .then((res) => {
    //     return res.json();
    //   })
    _searchProduct(keyword).then((result) => {
      setDataList(result.data);
    });
    setKeyword(keyword);
  }, [searchParams]);

  const showDetail = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="search">
      <h1 className="result">'{keyword}'에 대한 검색결과</h1>
      <div className="conteiner">
        <div className="goods">
          {dataList.map((item) => {
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
    </div>
  );
};

export default Search;
