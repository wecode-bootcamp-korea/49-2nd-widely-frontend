import React, { useState } from 'react';
import Input from '../../../components/Input/Input';
import './LoginCheck.scss';

const LoginCheck = () => {
  const [isSecurityChecked, setIsSecurityChecked] = useState(true);
  const [isIdSaveChecked, setIsIdSaveChecked] = useState(false);

  const handleSecurityChange = () => {
    setIsSecurityChecked(!isSecurityChecked);
  };

  const handleIdSaveChange = () => {
    setIsIdSaveChecked(!isIdSaveChecked);
  };

  return (
    <div className="checkWrap">
      <label className="labelWrapper">
        <Input
          type="checkbox"
          id="idSave"
          checked={isIdSaveChecked}
          onChange={handleIdSaveChange}
        />
        아이디 저장
      </label>
      <label className="labelWrapper">
        <Input
          type="checkbox"
          id="security"
          checked={isSecurityChecked}
          onChange={handleSecurityChange}
        />
        보안접속
      </label>
    </div>
  );
};

export default LoginCheck;
