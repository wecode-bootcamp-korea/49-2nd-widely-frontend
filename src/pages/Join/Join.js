import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 추가
import BasicInfo from './BasicInfo/BasicInfo';
import TermCheck from './TermCheck/TermCheck';
import './Join.scss';

const Join = () => {
  const userInfo = {
    email: '',
    password: '',
    name: '',
    address: {
      address1: '', // 우편번호
      address2: '', // 주소
      address3: '', // 상세주소
    },
    phone: {
      phone1: '010',
      phone2: '',
      phone3: '',
    },
    birth: {
      year: '',
      month: '',
      day: '',
    },
    terms: false,
  };

  const [fieldData, setFieldData] = useState(userInfo);
  const navigate = useNavigate();

  const handleSignUp = () => {
    // fetch('http://10.58.52.151:8000/users/signup', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email: fieldData.email,
    //     password: fieldData.password,
    //     name: fieldData.name,
    //     address1: fieldData.address.address1,
    //     address2: fieldData.address.address2,
    //     address3: fieldData.address.address3,
    //     phonenumber: `010-${fieldData.phone.phone2}-${fieldData.phone.phone3}`,
    //     birthday: `${fieldData.birth.year}/${fieldData.birth.month}/${fieldData.birth.day}`,
    //     terms: Number(fieldData.terms),
    //   }),
    // })
    //   .then((response) => {
    //     if (response.status === 200) {
    //       return response.json();
    //     }
    //     throw new Error('communication failure');
    //   })
    //   .then((result) => {
    //     // console.log('!!!!!!!!!!!!!!!!', result);
    //     console.log(result);
    //     if (result.message === 'Registration success') {
    //       navigate('/done');
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  // const handleSignUp = () => {
  //   console.log({
  //     email: fieldData.email,
  //     password: fieldData.password,
  //     name: fieldData.name,
  //     address1: fieldData.address.address1, // 우편번호
  //     address2: fieldData.address.address2, // 주소
  //     address3: fieldData.address.address3, // 상세주소
  //     phonenumber: `010-${fieldData.phone.phone2}-${fieldData.phone.phone3}`, // 010-0000-0000
  //     birthday: `${fieldData.birth.year}/${fieldData.birth.month}/${fieldData.birth.day}`, // 2000/00/00
  //     terms: fieldData.terms,
  //   });

  //   navigate('/done');
  // };

  return (
    <div className="joinMain">
      <div className="joinContainer">
        <div className="joinText">
          <h2>회원가입</h2>
          <div className="joinBasic">
            <h3>기본정보</h3>
            <p>
              <img
                src="https://wisely.store/custom/img/icon_require.png?1696239194034"
                className="mandatory"
                alt="필수입력사항"
              />
              필수입력사항
            </p>
          </div>
        </div>
        <div className="joinForm">
          <BasicInfo fieldData={fieldData} setFieldData={setFieldData} />
          <TermCheck />
        </div>
        <div className="joinButton">
          <button className="joinGo" onClick={handleSignUp}>
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
