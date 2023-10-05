import React from 'react';
import { ICON_DATA } from '../../../Data/mainIcon';
import './MainIcon.scss';

const MainIcon = () => {
  return (
    <div className="iconBox">
      {ICON_DATA.map((item, index) => (
        <div className="iconItem" key={index}>
          <img src={item.imageSrc} alt={item.title} />
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};
export default MainIcon;
