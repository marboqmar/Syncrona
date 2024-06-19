import React from 'react';
import ButtonProps from './interfaces/button.interface';

const Button = ({ text, type, disabled, onClick, width, height, theme }: ButtonProps) => {
  const styles = {
    width,
    height,
  };
  return (
    <button className={`${type} ${theme}`} disabled={disabled} onClick={onClick} style={styles}>
      {text}
    </button>
  );
};

export default Button;
