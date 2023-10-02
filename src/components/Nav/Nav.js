import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './component/Dropdown';
import './Nav.scss';

const Nav = () => {
  const [listBtn, setListBtn] = useState(false);

  return (
    <nav className="nav">
      <p className="event">
        <b>[신규혜택]</b> 1만원 쿠폰팩 증정
      </p>
      <header>
        <div className="inner-wrap">
          <div>
            <Link to="/main" className="mainTitle">
              widely
            </Link>
            <span>최고의 가성비가 아니면 팔지않습니다.</span>
          </div>
          <div>
            <Link className="loginLink" to="/login">
              가입/로그인
            </Link>
            <span>고객센터</span>
            <span>공지사항</span>
          </div>
        </div>
      </header>
      <div className="viewList">
        <div className="inner-wrap">
          <div
            className="category"
            onMouseOver={() => setListBtn(true)}
            onMouseOut={() => setListBtn(false)}
          >
            <div className="categoryList">
              <i className="fa-solid fa-bars" />
              <button>카테고리</button>
              {listBtn ? <Dropdown setListBtn={setListBtn} /> : null}
            </div>
          </div>
          <div className="tabWrapper">
            <span>홈</span>
            <span>신제품</span>
            <span>베스트</span>
            <span>와이들리 LAB</span>
          </div>
          <div className="inputI">
            <div className="glasses">
              <input type="text" />
              <i className="fa-solid fa-magnifying-glass" />
            </div>
            <i className="fa-regular fa-heart" />
            <i className="fa-solid fa-bag-shopping" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
