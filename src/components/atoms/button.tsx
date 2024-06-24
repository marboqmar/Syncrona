import React from 'react';
import ButtonProps from './interfaces/button.interface';
import '../../scss/components/atoms/buttons/base.scss';

const Button = ({ text, type, disabled, onClick, width, height, theme }: ButtonProps) => {
  const styles = {
    width,
    height,
  };
  return (
    <button 
    className={`${type} theme-${theme}`} 
    disabled={disabled} 
    onClick={onClick} 
    style={styles}>
      {text}
    </button>
  );
};

export default Button;
