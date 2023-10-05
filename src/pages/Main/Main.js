import React from 'react';
import { ICON_DATA } from '../../Data/mainIcon';
import MainSwiper from './MainSwiper/MainSwiper';
import MainBanner from './MainBanner/MainBanner';
import './Main.scss';

const Main = () => {
  return (
    <div>
      <div className="mainBox">
        <div className="iconBox">
          {ICON_DATA.map((item, index) => (
            <div className="iconItem" key={index}>
              <img src={item.imageSrc} alt={item.title} />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
        <MainBanner />
        <div />
        <div>
          <MainSwiper />
        </div>
      </div>
    </div>
  );
};
export default Main;
