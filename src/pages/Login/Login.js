import React from 'react';
import LoginInfo from './LoginInfo/LoginInfo';
import LoginFooter from './LoginFooter/LoginFooter';
import './Login.scss';

const Login = () => {
  return (
    <div>
      <div className="loginWrap">
        <div className="loginBox">
          <p>
            <strong>로그인 및 회원가입</strong>을<p>시작합니다</p>
          </p>
          <LoginInfo />
        </div>
        <LoginFooter />
      </div>
    </div>
  );
};

export default Login;
