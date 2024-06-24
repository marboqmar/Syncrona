import { Button, Icon } from "../atoms";
import { ModalProps } from "./interfaces/modal.interface";
import '../../scss/components/molecules/modal/base.scss';

const Modal = ({ children, theme, submitText, onSubmit, isOpen, setIsOpen }: ModalProps) => {
  const onClickSubmit = () => {
    onSubmit();
    setIsOpen(false);
  }
  return <dialog open={isOpen} className={`theme-${theme}`}>
    <Icon
      iconName='Close'
      iconType='action'
      onClick={() => setIsOpen(false)}
    />
    <div className='modal-content'>
      { children }
      <Button
        text={submitText}
        theme={theme}
        type='primary'
        width='150px'
        height='38px'
        onClick={onClickSubmit}
      />
    </div>
  </dialog>
}

export default Modal;