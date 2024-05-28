import React from "react";
import CheckboxProps from "./interfaces/checkbox.interface";

const Checkbox = ({setChecked,text,disabled,checked,name}:CheckboxProps) => {
  const onChange = ( ) => setChecked (!checked);
  return <div>
      <input
        id={name}
        type='checkbox'
        onChange={onChange}
        disabled={disabled}
        checked={checked}
        name={name}
      />
        <label htmlFor={name}>{text}</label>
    </div>
};

export default Checkbox;
