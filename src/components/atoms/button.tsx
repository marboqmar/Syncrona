import React from "react";
import ButtonProps from "./interfaces/button.interface";


const Button = ({text,type,disabled,onClick,width,height}:ButtonProps) =>{
    const styles={
        width,
        height,
        margin:"10px",
    };
    return <button 
        className={`${type}`} 
        disabled={disabled} 
        onClick={onClick} 
        style={styles}
    >
            {text}
    </button>
};

export default Button;