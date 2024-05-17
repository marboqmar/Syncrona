import React from "react";
import InputsProps from "./interfaces/inputs.interface";

const Inputs = ({text,type,disabled,width,height}:InputsProps) => {
  const styles = {
    width,
    height,
    margin: "10px",
  };
  return <input
      className={`${type}`}
      disabled={disabled}
      style={styles}
    >
      {text};
    </input>
};

export default Inputs;
