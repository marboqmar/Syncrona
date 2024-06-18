type ButtonType = 'primary' | 'secondary' | 'warning' | 'success' | 'error' | 'info';
type OnClickButton = () => void;
interface ButtonProps {
  text: string;
  type: ButtonType;
  disabled?: boolean;
  onClick: OnClickButton;
  width: string;
  height: string;
  theme?: string;
  className?: string;
}

export default ButtonProps;
