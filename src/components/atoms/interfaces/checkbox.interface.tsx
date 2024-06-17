type SetCheckboxValue = (value: boolean) => void;

interface CheckboxProps {
  disabled?: boolean;
  checked: boolean;
  setChecked: SetCheckboxValue;
  text?: string;
  name: string;
  theme?: string;
}

export default CheckboxProps;
