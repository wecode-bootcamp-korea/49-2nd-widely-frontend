import React from 'react';
import Input from '../../../components/Input/Input';
import './Birth.scss';

const Birth = (props) => {
  const { year, month, day, onChange } = props;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...props, [name]: value });
  };

  return (
    <form className="birthContainer" onChange={handleInputChange}>
      <Input type="text" className="smallBox" value={year} name="year" />
      /
      <Input type="text" className="smallBox" value={month} name="month" />
      /
      <Input type="text" className="smallBox" value={day} name="day" />
    </form>
  );
};

export default Birth;
