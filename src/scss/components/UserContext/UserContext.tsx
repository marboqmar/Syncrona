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
  const [tasks,setTasks] = useState<TaskModel[]>([]);
  const [title,setTitle] = useState<TaskBoardModel[]>([]);
  const [board,setBoard] = useState<TaskBoardModel[]>([]);
  const newTaskBoard = (newBoard:TaskBoardModel) => {
    setBoard(prevBoard => {
      return [...prevBoard,newBoard]
    })
  };
  const updateTaskBoardTitle = (newTitle: TaskModel) => {
    setTitle(prevTitle => {
      return [...prevTitle,newTitle]
    })
  };
  const updateTask = (newTask: TaskModel) => {
    setTasks(prevTaskState => {
      return [...prevTaskState,newTask]
    })
  };




  const contextValue = {
    updateTask,
    updateTaskBoardTitle,
    newTaskBoard,

  };
  return (
    <UserContextProvider value={{ contextValue }}>
      {children}
    </UserContextProvider>
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