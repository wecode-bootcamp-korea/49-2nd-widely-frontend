import React from 'react';
import { ICON_DATA } from '../../Data/mainIcon';
import MainSwiper from './MainSwiper/MainSwiper';
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
        <div className="bannerBox">
          <div className="bannerL">
            <img src="https://wisely.store/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/e97e2a12d3374f6828d3e4937f7f3bc4.jpg" />
          </div>
          <div className="bannerR">
            <img src="https://wisely.store/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/c6963493bd3e31eb478cfe717e711c81.jpg" />
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};
export default Main;
