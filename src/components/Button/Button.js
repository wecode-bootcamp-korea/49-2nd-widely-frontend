import React from 'react';
import './Button.scss';

const Button = (props) => {
  const {
    type,
    value,
    name,
    size,
    shape,
    disabled,
    onClick,
    className = 'btn',
  } = props;
  return (
    <button
      type={type}
      value={value}
      name={name}
      size={size}
      shape={shape}
      disabled={disabled}
      onClick={onClick}
      className={className}
    />
  );
};
