import React from 'react';
import MainIcon from './MainIcon/MainIcon';
import MainBanner from './MainBanner/MainBanner';
import MainSwiper from './MainSwiper/MainSwiper';
import './Main.scss';

const Main = () => {
  return (
    <div>
      <div className="mainBox">
        <MainIcon />
        <MainBanner />
        <MainSwiper />
      </div>
    </div>
  );
};
export default Main;
