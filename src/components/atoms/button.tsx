import React from "react";
import ButtonProps from "./interfaces/button.interface";

const Button = ({
  text,
  type,
  disabled,
  onClick,
  width,
  height,
  className,
}: ButtonProps) => {
  const styles = {
    width,
    height,
    margin: "10px",
  };
  return (
    <button
    className={`${type} ${className}`}
      disabled={disabled}
      onClick={onClick}
      style={styles}
    >
      {text}
    </button>
  );
};

export default Button;
