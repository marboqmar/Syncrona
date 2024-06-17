import { ReactNode, DragEvent } from "react";

type SetIsDragging = (isDragging: boolean) => void;
type OnDragEnd = (event: DragEvent) => void;

export interface DraggableProps {
  name: string;
  type: string;
  isDragging: boolean;
  setIsDragging: SetIsDragging;
  onDragEnd?: OnDragEnd;
  children: ReactNode;
}
