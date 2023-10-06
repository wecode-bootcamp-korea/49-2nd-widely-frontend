import React, { useState } from 'react';
import AddressForm from '../AddressForm/AddressForm';
import Input from '../../../components/Input/Input';
import Phone from '../Phone/Phone';
import Birth from '../Birth/Birth';
import {
  MANDATORY_ICON_DATA,
  FIELD_DATA,
  isRequired,
} from '../../../Data/joinInfo';
import './BasicInfo.scss';

const BasicInfo = (props) => {
  const { fieldData, setFieldData } = props;
  /*
  const [fieldData, setFieldData] = useState({
    birth: {
      year: '',
      month: '',
      day: '',
    },
    phone: {
      phone1: '010',
      phone2: '',
      phone3: '',
    },
    address: {
      address1: '',
      address2: '',
      address3: '',
    },
  });
*/
  //const [fieldData, setFieldData] = useState(props.fieldData);

  const { birth, phone, address } = fieldData;

  const handleFieldChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue);
    setFieldData((prevFieldData) => ({
      ...prevFieldData,
      [fieldName]: fieldValue,
    }));
  };

  return (
    <div>
      <table className="inputTable" border="1">
        <colgroup>
          <col className="tableL" />
          <col className="tableR" />
        </colgroup>
        <tbody>
          {FIELD_DATA.map((field) => (
            <tr key={field.name}>
              <th>
                {field.label}
                {isRequired && (
                  <img
                    src={MANDATORY_ICON_DATA.src}
                    className={MANDATORY_ICON_DATA.className}
                    alt={MANDATORY_ICON_DATA.alt}
                  />
                )}
              </th>
              <td>
                <Input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={fieldData[field.name]}
                  onChange={(e) =>
                    handleFieldChange(field.name, e.target.value)
                  }
                />
                {field.description && <p>{field.description}</p>}
              </td>
            </tr>
          ))}
          <tr>
            <th>
              주소
              <img
                src="https://wisely.store/custom/img/icon_require.png?1696239194034"
                className="mandatory"
                alt="필수입력사항"
              />
            </th>
            <td>
              <AddressForm
                address={address}
                onAddressChange={(newAddressData) =>
                  handleFieldChange('address', newAddressData)
                }
              />
            </td>
          </tr>
          <tr>
            <th>
              휴대전화
              <img
                src="https://wisely.store/custom/img/icon_require.png?1696239194034"
                className="mandatory"
                alt="필수입력사항"
              />
            </th>
            <td>
              <Phone
                phone1={fieldData.phone.phone1}
                phone2={fieldData.phone.phone2}
                phone3={fieldData.phone.phone3}
                onChange={(newPhoneData) =>
                  handleFieldChange('phone', newPhoneData)
                }
              />
            </td>
          </tr>
          <tr>
            <th>생년월일</th>
            <td>
              <Birth
                year={fieldData.birth.year}
                month={fieldData.birth.month}
                day={fieldData.birth.day}
                onChange={(newBirthData) =>
                  handleFieldChange('birth', newBirthData)
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BasicInfo;
