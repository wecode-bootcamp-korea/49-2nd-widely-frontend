import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from './component/Dropdown';
import './Nav.scss';

const Nav = () => {
  const [listBtn, setListBtn] = useState(false);
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const saveText = (text) => {
    setText(text);
  };

  const search = () => {
    if (text === '') {
      return;
    }
    navigate(`/search?keyword=${text}`);
    setText('');
  };
  const onSubmitSearch = (e) => {
    if (e.key === 'Enter') {
      if (text === '') {
        return;
      }
      setText('');
      search();
    }
  };
  const goBasket = () => {
    navigate('/basket');
  };

  const Token = localStorage.getItem('token');
  console.log('Token', Token);

  const handleLogout = () => {
    localStorage.removeItem('token');

    alert('로그아웃이 완료되었습니다.');
    window.location.reload();
  };

  return (
    <nav className="nav">
      <p className="event">
        <b>[와이들리]</b> 와이들리를 이용해 주신 회원님 환영합니다!
      </p>
      <header>
        <div className="inner-wrap">
          <div>
            <Link to="/" className="mainTitle">
              widely
            </Link>
            <span>최고의 가성비가 아니면 팔지않습니다.</span>
          </div>
          <div>
            {Token ? (
              <span className="loginLink" onClick={handleLogout}>
                로그아웃
              </span>
            ) : (
              <Link className="loginLink" to="/login">
                가입/로그인
              </Link>
            )}

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
            <Link className="mainLink" to="/">
              홈
            </Link>
            <Link className="mainLink" to="/products?category=new">
              신제품
            </Link>
            <span>베스트</span>
            <span>와이들리 LAB</span>
          </div>
          <div className="inputI">
            <div className="glasses">
              <input
                type="text"
                value={text}
                onChange={(e) => saveText(e.target.value)}
                onKeyPress={onSubmitSearch}
              />
              <div onClick={search}>
                <i className="fa-solid fa-magnifying-glass" />
              </div>
            </div>
            <i className="fa-regular fa-heart" />
            <div onClick={goBasket} className="basket">
              <i className="fa-solid fa-bag-shopping" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
