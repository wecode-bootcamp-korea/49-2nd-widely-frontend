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
        <div className="loginCheck">
          <p className="checkWrap">
            <Input type="checkbox" id="idSave" />
            <label for="idSave">아이디 저장</label>
            <Input type="checkbox" id="security" checked />
            <label for="security">보안접속</label>
          </p>
        </div>
        <div className="loginButton">
          <button type="button" className="loginBtn">
            로그인
          </button>
          <button type="button" className="joinBtn">
            회원가입
          </button>
          <button type="button" className="kakaoBtn">
            <img src="https://wisely.store/SkinImg/img/icon_kakao.svg" />
            &nbsp; 카톡으로 쉽게 시작하기
          </button>
        </div>
        <ul className="search">
          <li>이메일 찾기</li>
          <li>비밀번호 찾기</li>
        </ul>
      </fieldset>
    </form>
  );
};

export default LoginInfo;
