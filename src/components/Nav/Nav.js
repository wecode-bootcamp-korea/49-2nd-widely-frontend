import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <p className="event">
        <b>[신규혜택]</b> 1만원 쿠폰팩 증정
      </p>
      <header>
        <div>
          <span className="mainTitle">widely</span>
          <span>최고의 가성비가 아니면 팔지않습니다.</span>
        </div>
        <div>
          <span>가입/로그인</span>
          <span>고객센터</span>
          <span>공지사항</span>
        </div>
      </header>
      <div className="viewList">
        <div className="kateGoRie">
          <i class="fa-solid fa-bars" />
          <span>카테고리</span>
        </div>
        <div className="tabWrapper">
          <span>홈</span>
          <span>신제품</span>
          <span>베스트</span>
          <span>와이들리 LAB</span>
        </div>
        <div className="inputI">
          <input type="text" />
          <i class="fa-solid fa-magnifying-glass" />
          <i class="fa-regular fa-heart" />
          <i class="fa-solid fa-bag-shopping" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
