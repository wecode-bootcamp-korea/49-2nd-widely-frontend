import React from 'react';
import LoginInfo from './LoginInfo/LoginInfo';
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
          <LoginInfo />
        </div>
        <LoginFooter />
      </div>
    </div>
  );
};

export default Login;
