import React, { useState, useEffect } from 'react';

const MainProduct = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/main/main.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData.data))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  return (
    <div>
      <h1>Product Lists</h1>
      {data &&
        data.resultOne.map(({ id, image, price, name, description }) => (
          <div className="mainItem" key={id}>
            <img className="mainImg" src={`${image}`} alt={name} />
            <span className="mainPrice">{`${price.toLocaleString(
              'ko-KR',
            )}원 `}</span>
            <p className="productName">{`${name}`}</p>
            <span className="productDesc">{`${description}`}</span>
          </div>
        ))}
      {data &&
        data.resultTwo.map(({ id, image, price, name, description }) => (
          <div className="mainItem" key={id}>
            <img className="mainImg" src={`${image}`} alt={name} />
            <span className="mainPrice">{`${price.toLocaleString(
              'ko-KR',
            )}원 `}</span>
            <p className="productName">{`${name}`}</p>
            <span className="productDesc">{`${description}`}</span>
          </div>
        ))}
      {data &&
        data.resultThree.map(({ id, image, price, name, description }) => (
          <div className="mainItem" key={id}>
            <img className="mainImg" src={`${image}`} alt={name} />
            <span className="mainPrice">{`${price.toLocaleString(
              'ko-KR',
            )}원 `}</span>
            <p className="productName">{`${name}`}</p>
            <span className="productDesc">{`${description}`}</span>
          </div>
        ))}
      {data &&
        data.resultFour.map(({ id, image, price, name, description }) => (
          <div className="mainItem" key={id}>
            <img className="mainImg" src={`${image}`} alt={name} />
            <span className="mainPrice">{`${price.toLocaleString(
              'ko-KR',
            )}원 `}</span>
            <p className="productName">{`${name}`}</p>
            <span className="productDesc">{`${description}`}</span>
          </div>
        ))}
    </div>
  );
};

export default MainProduct;
