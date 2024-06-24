import { DragEvent } from 'react';
import { DraggableProps } from './interfaces/draggable.interface.tsx'

const Draggable = ({ name, type, isDragging, setIsDragging, onDragEnd, children }: DraggableProps) => {
    const onDragStart = (event: DragEvent) => {
        setIsDragging(true);
        event.dataTransfer.clearData();
        event.dataTransfer.setData('text', name);
        event.dataTransfer.setData('type', type);
    }
    return <div
        id={name}
        className={`draggable ${type} ${isDragging ? 'dragging' : ''}`}
        draggable
        onDragStart={onDragStart}
        onDragEnd={(event: DragEvent) => {
          if (onDragEnd) onDragEnd(event);
          setIsDragging(false);
        }}
    >
        {children}
    </div>
    }

    export default Draggable;