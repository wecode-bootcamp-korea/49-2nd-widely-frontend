import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ICON_DATA } from '../../../Data/mainIcon';
import './MainIcon.scss';

const MainIcon = () => {
  const navigate = useNavigate();

  const handleClick = (name) => {
    navigate(`/product/${name}`);
  };
  return (
    <div className="iconBox">
      {ICON_DATA.map(({ id, imageSrc, title, name }) => (
        <div className="iconItem" key={id} onClick={() => handleClick(name)}>
          <img src={imageSrc} alt={title} />
          <span>{title}</span>
        </div>
      ))}
    </div>
  );
};
export default MainIcon;
