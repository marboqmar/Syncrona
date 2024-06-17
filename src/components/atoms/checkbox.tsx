import React from "react";
import CheckboxProps from "./interfaces/checkbox.interface";
import '../../scss/components/atoms/checkbox/base.scss';

const Checkbox = ({
  setChecked,
  text,
  disabled,
  checked,
  name,
  theme
}: CheckboxProps) => {
  const onChange = () => setChecked(!checked);
  return (
    <div>
      <input
        id={name}
        type="checkbox"
        onChange={onChange}
        disabled={disabled}
        checked={checked}
        name={name}
        className={`theme-${theme}`}
      />
      <label htmlFor={name}>{text}</label>
    </div>
  );
};

export default Checkbox;
