import { ReactNode, createContext, useState } from "react";

interface TaskBoardListModel {
  taskboards: TaskBoardModel[];
  background: string;
  id: number;
}

interface TaskBoardModel {
  title: string;
  tasks: TaskModel[];
}

interface TaskModel {
  text: string;
  images?: string[];
  id: number;
}

interface UserContextModel {
  taskboardList: TaskBoardListModel;
  updateTask: (taskID: number, newTaskProps: Task) => void;
  deleteTask: (taskID: number) => void;
  newTaskBoard: (boardID: number, newBoardProps: Board) => void;
  updateTaskBoardTitle: (taskBoardID: number, newTitle: string) => void;
}

const context: UserContextModel = {
  updateTask: () => {
    return;
  },
  updateTaskBoardTitle: () => {
    return;
  },
  deleteTask: () => {
    return;
  },
  newTaskBoard: () => {
    return;
  },
};

export const UserContext = createContext<UserContextModel>(context);

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider = ({
  children,
}: UserContextProviderProps): JSX.Element => {
  const contextValue = {};
  return (
    <UserContextProvider value={{ contextValue }}>
      {children}
    </UserContextProvider>
  );
};
