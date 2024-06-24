export interface TaskData {
    title: string,
    positionId: number,
    isFinished: boolean,
    isDragging: boolean,
    isHighlighted: boolean,
}
export type SetTaskData = (data: TaskData) =>void;

export interface TaskProps {
    theme?: string,
    name: string,
    data: TaskData,
    setData: SetTaskData,
}
