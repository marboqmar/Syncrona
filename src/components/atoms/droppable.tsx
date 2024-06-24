import { DragEvent } from 'react';
import { DroppableProps } from './interfaces/droppable.interface.tsx';

const Droppable = ({name, type, onDrop, children}: DroppableProps) => {
  const onDragOver = (event: DragEvent) => event.preventDefault();
  const onDragEnd = (event: DragEvent) => {
    if (event.dataTransfer.getData('type') === type){
      onDrop(event.dataTransfer.getData('text'));
    }
  }
  return <div className={`droppable ${name} ${type}`}
    id={name}
    onDragOver={onDragOver}
    onDrop={onDragEnd}
  >
    { children }
  </div>
}

export default Droppable;