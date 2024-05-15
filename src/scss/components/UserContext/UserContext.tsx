import { ReactNode, createContext, useState } from "react";

interface TaskBoard {}

const context: UserContextModel = {
  TaskBoard,
  ChangeTask: () => {
    return;
  },
  DeleteTask: () => {
    return;
  },
  AddTask: () => {
    return;
  },
  AddTaskBoard: () => {
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
  const [title, setTitle] = useState<String>();

  const contextValue = {
    ListTitle: setTitle,
    BoardCard: "",
    AddCardOrList: "",
    AddNewBoard: "",
  };
  return (
    <UserContextProvider value={{ contextValue }}>
      {children}
    </UserContextProvider>
  );
};
