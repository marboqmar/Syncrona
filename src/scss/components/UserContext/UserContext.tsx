import { ReactNode, createContext, useState } from "react";
import { Board } from "../models";

export interface TaskBoardModel {
  title: string;
  tasks: TaskModel;
  id: number;
}

export interface TaskModel {
  text: string;
  images?: string[];
  id: number;
}

interface UserContextModel {
  boards: TaskBoardModel[];
  newBoard: (board: TaskBoardModel) => void;
  updateBoard: (
    boardId: number,
    propsToUpdate: Pick<TaskBoardModel, "title" | "tasks">
  ) => void;
}

const context: UserContextModel = {
  boards: [],
  newBoard: () => {},
  updateBoard: () => {},
};

export const UserContext = createContext<UserContextModel>(context);

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider = ({
  children,
}: UserContextProviderProps): JSX.Element => {

  const [boards, setBoards] = useState<TaskBoardModel[]>([]);

  const newBoard = (newBoard: TaskBoardModel) => {
    setBoards((prevBoard) => [...prevBoard, newBoard]);
  };
  const updateBoard = (
    boardId: number,
    propsToUpdate: Pick<TaskBoardModel, "title" | "tasks">
  ) => {
    setBoards((prevBoards) => {
      {
        return prevBoards.map((board) => {
          if (board.id === boardId) {
            return {
              ...board,
              ...propsToUpdate,
            };
          }
          return board;
        });
      }
    });
  };


  const contextValue: UserContextModel = {
    boards,
    newBoard,
    updateBoard,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
