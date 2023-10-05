import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SaleBanner from '../SaleBanner/SaleBanner';
import 'swiper/css';
import 'swiper/css/navigation';
import './MainSwiper.scss';

const MainSwiper = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/main/main.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData.data))
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
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {data.resultOne.map(({ id, image, price, name, description }) => (
                <SwiperSlide key={id}>
                  <div
                    className="mainItem"
                    key={id}
                    onClick={() => handleClick(id)}
                  >
                    <img className="productImg" src={`${image}`} alt={name} />
                    <p className="productPrice">{`${price.toLocaleString(
                      'ko-KR',
                    )}원 `}</p>
                    <p className="productName">{`${name}`}</p>
                    <p className="productDesc">{`${description}`}</p>
                  </div>
                </SwiperSlide>
              ))}
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
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {data.resultTwo.map(({ id, image, price, name, description }) => (
                <SwiperSlide key={id}>
                  <div
                    className="mainItem"
                    key={id}
                    onClick={() => handleClick(id)}
                  >
                    <img className="productImg" src={`${image}`} alt={name} />
                    <p className="productPrice">{`${price.toLocaleString(
                      'ko-KR',
                    )}원 `}</p>
                    <p className="productName">{`${name}`}</p>
                    <p className="productDesc">{`${description}`}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <SaleBanner />
          <div className="resultBox">
            <p className="categoryName">스킨케어 베스트</p>
            <Swiper
              modules={[Navigation]}
              className="swiperContainer"
              spaceBetween={6}
              slidesPerView={4}
              navigation
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {data.resultThree.map(
                ({ id, image, price, name, description }) => (
                  <SwiperSlide key={id}>
                    <div
                      className="mainItem"
                      key={id}
                      onClick={() => handleClick(id)}
                    >
                      <img className="productImg" src={`${image}`} alt={name} />
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
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {data.resultFour.map(
                ({ id, image, price, name, description }) => (
                  <SwiperSlide key={id}>
                    <div
                      className="mainItem"
                      key={id}
                      onClick={() => handleClick(id)}
                    >
                      <img className="productImg" src={`${image}`} alt={name} />
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
