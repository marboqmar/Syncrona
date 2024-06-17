import { ReactNode } from "react";

type OnSubmit = () => void;
export type SetIsOpen = (isOpen: boolean) => void;

export interface ModalProps{
  children: ReactNode;
  submitText: string;
  theme: string;
  onSubmit: OnSubmit;
  isOpen: boolean;
  setIsOpen: SetIsOpen;
}