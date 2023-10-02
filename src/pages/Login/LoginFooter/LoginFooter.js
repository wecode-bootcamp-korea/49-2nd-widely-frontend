import React from 'react';
import './LoginFooter.scss';

const LoginFooter = () => {
  return (
    <div className="ftMain">
      <div className="logFtBox">
        <div className="ftText">
          <div className="ftTop">
            <p className="store">새로워진 와이즐리 스토어 안내</p>
          </div>
          <div className="ftMid">
            <p>더 편리한 서비스를 위해 와이즐리 스토어 서버가 이전 되었어요.</p>
            <p className="fontBlack">
              기존 카카오 로그인을 이용하시던 분은 동일하게 "카톡으로 쉽게
              시작하기" 클릭 후 자동 인증 및 로그인
              <br />
              이메일 고객은 "비밀번호 찾기" 기능을 통해 새로운 비밀번호를 설정해
              주시면 됩니다.
            </p>
          </div>
          <div className="ftBot">
            <p>
              로그인 및 비밀번호 관련 안내를 받지 못하셨거나, 개인정보 이관
              내용에 대한 문의가 있으시다면 고객센터로 연락 주세요.
            </p>
          </div>
        </div>
        <div className="ftCs">
          <button type="button">카카오톡 문의</button>
        </div>
      </div>
    </div>
  );
};

export default LoginFooter;
