import React from 'react';
import './Button.scss';

const Button = (props) => {
  const { type, value, name, size, scale, onclick, classname = '' } = props;
  return (
    <button
      type={type}
      value={value}
      name={name}
      size={size}
      scale={scale}
      onclick={onclick}
      classname={classname}
    />
  );
};

export default Button;
