import { ReactNode, createContext } from "react";


interface UserContextModel {
    ListTitle?: string;
    BoardCard?: string;
    AddCardOrList?: string;
    AddNewBoard?: string;
}

const context: UserContextModel = {};

export const UserContext = createContext<UserContextModel>(context);


interface UserContextProviderProps {
    children: ReactNode;
}

export const UserContextProvider = ({children}:UserContextProviderProps ): JSX.Element => {
    const contextValue = {};
    return <UserContext.Provider value={{contextValue}}>{children}</UserContext.Provider>
};
 