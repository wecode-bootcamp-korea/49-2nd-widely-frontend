import React from 'react';
import Input from '../../../components/Input/Input';
// import Button from '../../../components/Button/Button';
import './LoginInfo.scss';

const LoginInfo = () => {
  return (
    <form>
      <fieldset className="logInfoMain">
        <legend>로그인</legend>
        <div className="loginInput">
          <Input
            type="email"
            name="email"
            placeholder="이메일을 입력해주세요"
          />
          <Input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <div className="loginRadio">
          <Input type="checkbox" />
          아이디 저장
          <Input type="checkbox" />
          보안접속
        </div>
        <div className="loginButton">
          <button>로그인</button>
          <button>회원가입</button>
          <button>카톡으로 쉽게 시작하기</button>
        </div>
        <ul className="search">
          <li>회원가입</li>
          <li>비밀번호 찾기</li>
        </ul>
      </fieldset>
    </form>
  );
};

export default LoginInfo;
