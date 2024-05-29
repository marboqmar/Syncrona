import { ReactNode, createContext, useState } from "react";
import { Board } from "../models";
interface TaskBoardListModel {
  taskboards: TaskBoardModel[];
  background: string;
  id: number;
}

interface TaskBoardModel {
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
  taskboardList: {
    taskboards: [],
    background: "",
    id: 0,
  },
  updateTask: (taskid: number, newTaskProps: Task) => void;
  deleteTask: (taskid: number) => void;
  newTaskBoard: (boardid: number, newBoardProps: Board) => void;
  updateTaskBoardTitle: (taskBoardid: number, newTitle: string) => void;
}

const context: UserContextModel = {
  taskboardList: {
    taskboards: [],
    background: "",
    id: 0,
  },

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
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [title, setTitle] = useState<TaskBoardModel[]>([]);
  const [boards, setBoards] = useState<TaskBoardModel[]>([]);
  const [board, setBoard] = useState<Board[]>([]);

  const deleteTask = (taskId: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  const newTaskBoard = (newBoard: TaskBoardModel) => {
    setBoards((prevBoard) => [...prevBoard, newBoard]);
  };

  const updateTaskBoardTitle = (newTitle: TaskBoardModel) => {
    setTitle((prevTitle) => [...prevTitle, newTitle]);
  };

  const updateTask = (newTask: TaskModel) => {
    setTasks((prevTaskState) => [...prevTaskState, newTask]);
  };

  const contextValue = {
    updateTask,
    updateTaskBoardTitle,
    newTaskBoard,
    deleteTask,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

/*

export const UserContextProvider = ({
  children,
}: UserContextProviderProps): JSX.Element => {
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const addTask = (newTask: TaskModel) => {
    setTasks(prevTasksState => {
       return [...prevTasksState, newTask];
    });
  }
  const contextValue = {
    addTask
  };
  return (
    <UserContextProvider value={{ contextValue }}>
      {children}
    </UserContextProvider>
  );
};
*/
