import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../../components/Input/Input';
import LoginCheck from '../LoginCheck/LoginCheck';
import './LoginWrap.scss';
const LoginWrap = () => {
  const navigate = useNavigate();
  const handleJoin = () => {
    navigate('/join');
  };
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userInfo;
  const typingSentry = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const emailValidCheck = (email) => {
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(email);
  };
  const pwValidCheck = (password) => {
    if (password.length >= 10) {
      return true;
    }
    return false;
  };
  const isUserInputValid = emailValidCheck(email) && pwValidCheck(password);
  const submitUserInfo = (e) => {
    e.preventDefault();
    //
    navigate('/');
    //
    fetch('http://10.58.52.82:8000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === 'Login success') {
          localStorage.setItem('token', result.token);
          navigate('/');
        } else if (result.status === 401) {
          alert('아이디를 확인해주세요');
        } else {
          alert('로그인 실패');
        }
      });
  };
  return (
    <form
      className="loginForm"
      onChange={typingSentry}
      onSubmit={submitUserInfo}
    >
      <fieldset className="logInfoMain">
        <legend>로그인</legend>
        <div className="loginInput">
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="이메일을 입력해주세요"
          />
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <LoginCheck />
        <div className="loginButton">
          <button
            type="submit"
            className="loginBtn"
            disabled={!isUserInputValid}
          >
            로그인
          </button>
          <button type="button" className="joinBtn" onClick={handleJoin}>
            회원가입
          </button>
          <p className="kakaoLink">
            <a href="https://kauth.kakao.com/oauth/authorize?client_id=1c6e9e460200c4390eabf0875a047bed&redirect_uri=http://localhost:8000/users/kakao/login&response_type=code">
              <img src="https://wisely.store/SkinImg/img/icon_kakao.svg" />
              &nbsp; 카톡으로 쉽게 시작하기
            </a>
          </p>
        </div>
        <ul className="searchId">
          <li>
            <Link to="/find_id" className="linkText">
              이메일 찾기
            </Link>
          </li>
          <li>
            <Link to="/find_pw" className="linkText">
              비밀번호 찾기
            </Link>
          </li>
        </ul>
      </fieldset>
    </form>
  );
};
export default LoginWrap;
