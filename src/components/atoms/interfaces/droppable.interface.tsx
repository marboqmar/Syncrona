import { ReactNode } from "react";

type OnDrop = (draggableId: string) => void;

export interface DroppableProps {
  name: string;
  type: string;
  onDrop: OnDrop;
  children?: ReactNode;
}