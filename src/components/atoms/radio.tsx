import React from "react";
import RadioProps from "./interfaces/radio.interface";

const Radio = ({value,selectedOption,setSelectedOption,text,disabled,groupName}:RadioProps) => {
    const onChange = (event: React.ChangeEvent) => {
        //setValue((event.target as HTMLInputElement).value)
        const target = (event.target as HTMLInputElement);
        if (target.checked){
            setSelectedOption(target.value);
            //yo te invoco
        }
    };
    return <div>
        
        <input
          type='radio'
          onChange={onChange}
          disabled={disabled}
          value={value}
          checked={selectedOption === value}
          name={groupName}

        ></input>
          <label htmlFor={groupName}>
                {text}
          </label>
      </div>
  };
  
  export default Radio;
  