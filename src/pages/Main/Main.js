import React from 'react';
import MainIcon from './MainIcon/MainIcon';
import MainSwiper from './MainSwiper/MainSwiper';
import './Main.scss';

const Main = () => {
  return (
    <div>
      <div className="mainBox">
        <MainIcon />
        <MainSwiper />
      </div>
    </div>
  );
};
export default Main;
