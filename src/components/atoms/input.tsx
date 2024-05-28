import React from "react";
import InputProps from "./interfaces/input.interface";

const Input = ({type,disabled,width,height,placeholder,value,name,inputLabel,setValue}:InputProps) => {
  const onChange = (event: React.ChangeEvent) => setValue((event.target as HTMLInputElement).value);
  
  const styles = {
    width,
    height,
    margin: "10px",
  };
  return <div>
    {
      inputLabel&&<div>
        <label htmlFor={name}>{inputLabel}</label>
        <br/>
      </div>
    }
    <input
      type={type||'text'}
      disabled={disabled}
      style={styles}
      placeholder={placeholder}
      value={value}
      name={name}
      id={name}
      onChange={onChange}
    />
  </div>
};

export default Input;
