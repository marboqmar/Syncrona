type InputsType = "default" | "success" | "error";

interface InputsProps {
  text: string;
  type: InputsType;
  disabled?: boolean;
  isWriting?: boolean;
  width: string;
  height: string;
}

export default InputsProps;
