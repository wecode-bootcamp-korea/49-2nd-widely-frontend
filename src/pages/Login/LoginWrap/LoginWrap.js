import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../../components/Input/Input';
import LoginCheck from '../LoginCheck/LoginCheck';
import './LoginWrap.scss';
import { _login } from '../../../api';
const LoginWrap = () => {
  const navigate = useNavigate();
  // const handleJoin = () => {
  //   navigate('/join');
  // };회원가입 비활성화
  const [userInfo, setUserInfo] = useState({
    email: 'test@test.com',
    password: 'thisistestpassword',
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
    // fetch('http://10.58.52.82:8000/users/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email: email,
    //     password: password,
    //   }),
    // })
    //   .then((res) => res.json())
    _login(email, password).then((result) => {
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
            value={email}
            placeholder="이메일을 입력해주세요"
          />
          <Input
            id="password"
            type="password"
            name="password"
            value={password}
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
          <button type="button" className="joinBtn">
            회원가입ㅇ
          </button>
        </div>
        <ul className="searchId">
          <li>
            <Link to="/#" className="linkText">
              이메일 찾기
            </Link>
          </li>
          <li>
            <Link to="/#" className="linkText">
              비밀번호 찾기
            </Link>
          </li>
        </ul>
      </fieldset>
    </form>
  );
};
export default LoginWrap;
