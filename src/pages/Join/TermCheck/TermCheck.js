import React, { useState } from 'react';
import Input from '../../../components/Input/Input';
import './TermCheck.scss';

const TermCheck = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const result = isChecked ? 1 : 0;
  console.log(result);

  return (
    <form className="termWrap" onChange={handleCheckboxChange}>
      <div className="termL">
        <p>이용약관동의</p>
      </div>
      <ul className="termR">
        <li>
          <Input type="checkbox" checked={isChecked} />
          <label for="idSave" className="whole">
            전체 동의합니다
          </label>
        </li>
        <li>
          <p>
            선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할
            수 있습니다.
          </p>
        </li>
        <li>
          <Input type="checkbox" checked={isChecked} />
          <label>[필수] 이용약관 동의</label>
        </li>
        <li>
          <Input type="checkbox" checked={isChecked} />
          <label>[필수] 개인정보 수집 및 이용 동의</label>
        </li>
        <li>
          <Input type="checkbox" checked={isChecked} />
          <label for="security">
            [선택] SMS (문자, 카카오톡 등)으로 혜택과 유용한 정보를 보내드려도
            될까요?
          </label>
        </li>
        <li>
          <Input type="checkbox" checked={isChecked} />
          <label for="security">
            [선택] 이메일로 혜택과 정보를 보내드려도 될까요?
          </label>
        </li>
        <li>
          <p>
            본인은 만 14세 이상이며, 이용약관, 개인정보 수집 및 이용을
            확인하였으며, 동의합니다.
          </p>
        </li>
      </ul>
    </form>
  );
};

export default TermCheck;
