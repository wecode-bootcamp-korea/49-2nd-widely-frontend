import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/Input/Input';
import './FindId.scss';
// import Phone from '../../Join/Phone/Phone';

const FindId = () => {
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
    <form className="FindForm" onChange={typingSentry}>
      <fieldset className="findBox">
        <legend className="findInfo">로그인</legend>
        <div className="findInput">
          <p>이메일</p>
          <Input
            id="userName"
            type="text"
            name="userName"
            value={userName}
            placeholder="가입하신 이메일을 입력해주세요"
          />
          <p>전화번호</p>
          {/* <Phone /> */}
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

export default FindId;
