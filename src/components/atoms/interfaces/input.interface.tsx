type InputType = "text" | "password" | "number" | "tel" | "email" ;
type SetInputValue = (value: string) =>void;
interface InputProps {
  placeholder: string;
  width: string;
  height?: string;
  value: string;
  inputLabel?: string;
  name: string;
  type?: InputType;
  disabled?: boolean;
  setValue: SetInputValue;
}

export default InputProps;
