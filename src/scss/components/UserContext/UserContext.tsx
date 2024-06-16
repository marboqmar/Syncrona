import { ReactNode, createContext, useState } from "react";

export interface TaskBoardModel {
  title: string;
  tasks: TaskModel[];
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
  moverboard: (sourceIndex: number, destinationIndex: number) => void;
}

const context: UserContextModel = {
  boards: [],
  newBoard: () => {},
  updateBoard: () => {},
  moverboard: () => {},
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

  const moverboard = (sourceIndex: number, destinationIndex: number) => {
    setBoards((prevBoards) => {
      const items = Array.from(prevBoards);
      const [movedItem] = items.splice(sourceIndex, 1);
      items.splice(destinationIndex, 0, movedItem);
      return items;
    });
  };

  const updateBoard = (
    boardId: number,
    propsToUpdate: Pick<TaskBoardModel, "title" | "tasks">
  ) => {
    setBoards((prevBoards) => {
      return prevBoards.map((board) => {
        if (board.id === boardId) {
          return {
            ...board,
            ...propsToUpdate,
          };
        }
        return board;
      });
    });
  };

  const contextValue: UserContextModel = {
    boards,
    newBoard,
    updateBoard,
    moverboard,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
