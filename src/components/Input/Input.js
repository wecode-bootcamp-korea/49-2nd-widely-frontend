import React from 'react';
import './Input.scss';

const Input = (props) => {
  const {
    className = 'input',
    placeholder,
    type = 'text',
    disabled,
    name,
    onChange,
    status,
    value,
    checked,
  } = props;

  return (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      name={name}
      onChange={onChange}
      status={status}
      value={value}
      checked={checked}
    />
  );
};

export default Input;
