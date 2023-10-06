import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/Input/Input';
import './FindPw.scss';

const FindPw = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    userName: '',
    email: '',
  });

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!userName || !email) {
      alert('항목을 모두 입력해 주세요!');
      return;
    }

    fetch('http://10.58.52.94:8000/users/find-pw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: userName, email }),
    }).then((res) => {
      if (res.ok) {
        alert('입력하신 이메일로 임시 비밀번호를 발급했습니다.');
        navigate('/login');
      }
    });
  };

  const typingSentry = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const { userName, email } = userInfo;
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
        <div className="confirmButtonBox">
          <button type="submit" className="confirmButton">
            확인
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default FindPw;
