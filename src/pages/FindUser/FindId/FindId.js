import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/Input/Input';
import Phone from '../../Join/Phone/Phone';
import './FindId.scss';

const FindId = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: '',
    phonenumber: '',
  });

  const { name, phonenumber } = userInfo;

  const handleUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const findId = (e) => {
    e.preventDefault();
    fetch(
      `http://10.58.52.94:8000/users/find-id?name=${name}&phonenumber=${phonenumber}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        if (data) {
          alert(`아이디는 ${data.userId} 입니다.`);
        }
      });
  };
  return (
    <form className="FindForm" onChange={handleUserInfo} onSubmit={findId}>
      <fieldset className="findBox">
        <legend className="findInfo">이메일 찾기</legend>
        <div className="findInput">
          <p>이름</p>
          <Input
            id="userName"
            type="text"
            name="userName"
            value={name}
            placeholder="가입하신 이메일을 입력해주세요"
          />
          <p>전화번호</p>
          <Phone />
        </div>
        <div className="confirmButtonBox">
          <button className="confirmButton">확인</button>
        </div>
      </fieldset>
    </form>
  );
};

export default FindId;
