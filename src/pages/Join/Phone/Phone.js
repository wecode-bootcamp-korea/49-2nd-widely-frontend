import React from 'react';
import Input from '../../../components/Input/Input';
import './Phone.scss';

const Phone = (props) => {
  const { phone1, phone2, phone3, onChange } = props;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...props, [name]: value });
  };

  return (
    <form className="phoneContainer" onChange={handleInputChange}>
      <select className="smallBox" name="phone1" id="phone1" value={phone1}>
        <option>010</option>
        <option>011</option>
        <option>016</option>
        <option>017</option>
        <option>018</option>
        <option>019</option>
      </select>
      -
      <Input
        type="text"
        className="smallBox"
        name="phone2"
        value={phone2}
        placeholder="0000"
      />
      -
      <Input
        type="text"
        className="smallBox"
        name="phone3"
        value={phone3}
        placeholder="0000"
      />
    </form>
  );
};

export default Phone;
