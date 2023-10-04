import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/Input/Input';
import './FindPw.scss';

const FindPw = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/');
  };

  const [userInfo, setUserInfo] = useState({
    userName: '',
    email: '',
  });

  const { userName, email } = userInfo;

  const typingSentry = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <form className="FindForm" onChange={typingSentry} onSubmit={handleConfirm}>
      <fieldset className="findBox">
        <legend className="findInfo">비밀번호 찾기</legend>
        <div className="findInput">
          <p>이름</p>
          <Input
            id="userName"
            type="text"
            name="userName"
            value={userName}
            placeholder="가입하신 이름을 입력해주세요"
          />
          <p>이메일</p>
          <Input
            id="email"
            type="email"
            name="email"
            value={email}
            placeholder="가입하신 이메일을 입력해주세요"
          />
        </div>
        <div className="confirmButton">
          <button type="submit" className="confirmBtn">
            확인
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default FindPw;
