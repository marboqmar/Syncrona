import { ReactNode, createContext, useState } from "react";
import { Board } from "../models";


export interface TaskBoardModel {
  title: string;
  tasks: TaskModel[];
  id: number;
}

interface TaskModel {
  text: string;
  images?: string[];
  id: number;
}

interface UserContextModel {
  boards: TaskBoardModel[];
  newBoard: (board: TaskBoardModel)=> void;
  updateBoard: (boardId: number, propsToUpdate: Pick<TaskBoardModel, 'title'> ) => void; 
  /*updateTask: (taskid: number, newTaskProps: Task) => void;
  deleteTask: (taskid: number) => void;
  newTaskBoard: (boardid: number, newBoardProps: Board) => void;
  updateTaskBoardTitle: (taskBoardid: number, newTitle: string) => void;*/
}

const context: UserContextModel = {
 boards: [],
 newBoard: () => {},
updateBoard: () => {},
/*  updateTask: () => {
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
  },*/
};

export const UserContext = createContext<UserContextModel>(context);

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider = ({
  children,
}: UserContextProviderProps): JSX.Element => {
  /*const [tasks, setTasks] = useState<TaskModel[]>([]);*/

  const [boards, setBoards] = useState<TaskBoardModel[]>([]);


  /*const deleteTask = (taskId: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };*/

  const newBoard = (newBoard: TaskBoardModel) => {
    setBoards((prevBoard) => [...prevBoard, newBoard]);
  };
  const updateBoard =(boardId: number, propsToUpdate: Pick<TaskBoardModel, 'title'> ) => {
    setBoards((prevBoards)=> {{
      return prevBoards.map((board)=> {
        if (board.id === boardId) {
             
              return {
                ...board,
                ...propsToUpdate
              };
        }
        return board;
      })

    }})
  };


  /*const updateTaskBoardTitle = (newTitle: TaskBoardModel) => {
    setTitle((prevTitle) => [...prevTitle, newTitle]);
  };

  const updateTask = (newTask: TaskModel) => {
    setTasks((prevTaskState) => [...prevTaskState, newTask]);
  };*/

  const contextValue: UserContextModel = {
    boards,
    newBoard,
    updateBoard
    /*updateTask,
    updateTaskBoardTitle,
    newTaskBoard,
    deleteTask,*/
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

