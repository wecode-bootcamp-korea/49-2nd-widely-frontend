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
    onclick,
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
      onclick={onclick}
      className={className}
    />
  );
};

export default Button;
