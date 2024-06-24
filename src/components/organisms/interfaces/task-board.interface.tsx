import { TaskData } from '../../molecules/interfaces/task.interface';

export type SetTasks = (tasks: TaskData[]) => void;
export type OpenSelectThemeModal = () => void;
export type SetDraggedTask = (task: TaskData | undefined) => void;
export type SetTaskBoards = (taskboards: TaskBoardProps[]) => void;
export interface TaskBoardProps {
  theme: string;
  title: string;
  banner: string;
  tasks: TaskData[];
  draggedTask?: TaskData;
  setDraggedTask: SetDraggedTask
  setTasks: SetTasks;
  openSelectThemeModal: OpenSelectThemeModal;
}