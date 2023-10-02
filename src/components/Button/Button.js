import React from 'react';
import './Button.scss';

const Button = (props) => {
  const {
    label,
    type,
    value,
    size,
    shape,
    disabled,
    onClick,
    className = 'btn',
  } = props;
  return (
    <button
      label={label} //버튼안에 들어갈내용
      type={type} //타입(전송,버튼,초기화)
      value={value} //
      size={size}
      shape={shape}
      disabled={disabled}
      onClick={onClick}
      className={className}
    />
  );
};

export default Button;

