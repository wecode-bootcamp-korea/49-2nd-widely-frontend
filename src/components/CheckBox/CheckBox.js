import React from 'react';
import './CheckBox.scss';
import { useState } from 'react';

const Checkbox = () => {
  const [allCheckBox, setAllCheckBox] = useState();

  const changeAllBox = () => {
    setAllCheckBox();
  };
  return (
    <div>
      <input
        className="emptyCheckBox"
        type="checkbox"
        onChange={changeAllBox}
        checked={checked}
      />
    </div>
  );
};

export default Checkbox;
