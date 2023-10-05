import React from 'react';
import { useNavigate } from 'react-router-dom';

const SaleBanner = () => {
  // const navigate = useNavigate()
  // const handleClick = () => {
  //   navigate(`/details/${}`)
  // }
  return (
    <div className="mainBox">
      <div
        className="bannerBox"
        // onClick={() => handleClick()}
      >
        <img src="https://www.wisely.store/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/b67bf183f8293786cac36db328c1eaa0.jpg" />
      </div>
    </div>
  );
};
export default SaleBanner;
