type SetRadioValue = (selectOption: string) =>void;

interface RadioProps {
    disabled?: boolean;
    value: string;
    text: string;
    groupName: string;
    radioLabel?: string;
    selectedOption: string;
    setSelectedOption: SetRadioValue;
    
}

export default RadioProps;