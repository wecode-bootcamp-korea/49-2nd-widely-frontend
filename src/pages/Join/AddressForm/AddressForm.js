import React, { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import Input from '../../../components/Input/Input';
import './AddressForm.scss';

const AddressForm = ({ address, onAddressChange }) => {
  const scriptUrl =
    '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

  const open = useDaumPostcodePopup(scriptUrl);

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  const handleComplete = (data) => {
    let fulladdress = data.address;
    let extraaddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraaddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraaddress +=
          extraaddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fulladdress += extraaddress !== '' ? ` (${extraaddress})` : '';
    }

    onAddressChange({
      address1: data.zonecode,
      address2: fulladdress,
    });
  };

  return (
    <div className="addressContainer">
      <div className="zipWrap">
        <Input id="postcode" placeholder="우편번호" value={address.address1} />
        <button id="zipButton" type="button" onClick={handleClick}>
          주소검색
        </button>
      </div>
      <Input id="address" placeholder="기본주소" value={address.address2} />
      <Input
        type="text"
        id="addressDetail"
        placeholder="나머지 주소"
        value={address.address3}
        onChange={(e) => {
          onAddressChange({
            ...address,
            address3: e.target.value,
          });
        }}
      />
    </div>
  );
};

export default AddressForm;
