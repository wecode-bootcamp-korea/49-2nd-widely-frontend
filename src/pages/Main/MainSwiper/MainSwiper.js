import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './MainSwiper.scss';
import { _getMain } from '../../../api';

const MainSwiper = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    // fetch('http://10.58.52.82:8000/products/main')
    //   .then((response) => response.json())
    _getMain()
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  return (
    <>
      &nbsp;
      {data && (
        <div className="cardList">
          <div className="resultBox">
            <p className="categoryName">영양제 베스트</p>
            <Swiper
              modules={[Navigation]}
              className="swiperContainer"
              spaceBetween={6}
              slidesPerView={4}
              navigation
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              {data.result1.map(
                ({ id, thumbnailImage, price, name, description }) => (
                  <SwiperSlide key={id}>
                    <div
                      className="mainItem"
                      key={id}
                      onClick={() => handleClick(id)}
                    >
                      <img
                        className="productImg"
                        src={thumbnailImage}
                        alt={name}
                      />
                      <p className="productPrice">{`${price.toLocaleString(
                        'ko-KR',
                      )}원 `}</p>
                      <p className="productName">{name}</p>
                      <p className="productDesc">{description}</p>
                    </div>
                  </SwiperSlide>
                ),
              )}
            </Swiper>
          </div>
          <div className="resultBox">
            <p className="categoryName">면도/구강 베스트</p>
            <Swiper
              modules={[Navigation]}
              className="swiperContainer"
              spaceBetween={6}
              slidesPerView={4}
              navigation
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              {data.result2.map(
                ({ id, thumbnailImage, price, name, description }) => (
                  <SwiperSlide key={id}>
                    <div
                      className="mainItem"
                      key={id}
                      onClick={() => handleClick(id)}
                    >
                      <img
                        className="productImg"
                        src={`${thumbnailImage}`}
                        alt={name}
                      />
                      <p className="productPrice">{`${price.toLocaleString(
                        'ko-KR',
                      )}원 `}</p>
                      <p className="productName">{`${name}`}</p>
                      <p className="productDesc">{`${description}`}</p>
                    </div>
                  </SwiperSlide>
                ),
              )}
            </Swiper>
          </div>
          <div className="resultBox">
            <p className="categoryName">스킨케어 베스트</p>
            <Swiper
              modules={[Navigation]}
              className="swiperContainer"
              spaceBetween={6}
              slidesPerView={4}
              navigation
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              {data.result3.map(
                ({ id, thumbnailImage, price, name, description }) => (
                  <SwiperSlide key={id}>
                    <div
                      className="mainItem"
                      key={id}
                      onClick={() => handleClick(id)}
                    >
                      <img
                        className="productImg"
                        src={`${thumbnailImage}`}
                        alt={name}
                      />
                      <p className="productPrice">{`${price.toLocaleString(
                        'ko-KR',
                      )}원 `}</p>
                      <p className="productName">{`${name}`}</p>
                      <p className="productDesc">{`${description}`}</p>
                    </div>
                  </SwiperSlide>
                ),
              )}
            </Swiper>
          </div>
          <div className="resultBox">
            <p className="categoryName">푸드 베스트</p>
            <Swiper
              modules={[Navigation]}
              className="swiperContainer"
              spaceBetween={6}
              slidesPerView={4}
              navigation
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              {data.result4.map(
                ({ id, thumbnailImage, price, name, description }) => (
                  <SwiperSlide key={id}>
                    <div
                      className="mainItem"
                      key={id}
                      onClick={() => handleClick(id)}
                    >
                      <img
                        className="productImg"
                        src={`${thumbnailImage}`}
                        alt={name}
                      />
                      <p className="productPrice">{`${price.toLocaleString(
                        'ko-KR',
                      )}원 `}</p>
                      <p className="productName">{`${name}`}</p>
                      <p className="productDesc">{`${description}`}</p>
                    </div>
                  </SwiperSlide>
                ),
              )}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default MainSwiper;
