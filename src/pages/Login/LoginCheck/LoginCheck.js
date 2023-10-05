import React from 'react';
import Input from '../../../components/Input/Input';
import './LoginCheck.scss';

const LoginCheck = () => {
  return (
    <div className="checkWrap">
      <Input type="checkbox" id="idSave" />
      <label for="idSave">아이디 저장</label>
      <Input type="checkbox" id="security" />
      <label for="security">보안접속</label>
    </div>
  );
};

export default LoginCheck;
