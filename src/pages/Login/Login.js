import React from 'react';
import LoginWrap from './LoginWrap/LoginWrap';
import LoginFooter from './LoginFooter/LoginFooter';
import './Login.scss';

const Login = () => {
  return (
    <div>
      <div className="loginWrap">
        <div className="loginBox">
          <p className="loginStart">
            <span>로그인 및 회원가입</span>
            을
            <br />
            시작합니다
          </p>
          <LoginWrap />
        </div>
        <LoginFooter />
      </div>
    </div>
  );
};

export default Login;
