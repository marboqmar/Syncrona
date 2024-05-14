import { ReactNode, createContext, useState } from "react";


interface UserContextModel {
    ListTitle: string;
    BoardCard?: string;
    AddCardOrList?: string;
    AddNewBoard?: string;
}

const context: UserContextModel = {
    ListTitle: "",
};

export const UserContext = createContext<UserContextModel>(context);


interface UserContextProviderProps {
    children: ReactNode;
}

export const UserContextProvider = ({children}:UserContextProviderProps ): JSX.Element => {
    const [title, setTitle] = useState<String>()

    const contextValue = {
        ListTitle: setTitle,
        BoardCard: "",
        AddCardOrList: "",
        AddNewBoard:""
    };
    return <UserContextProvider value={{contextValue}}>{children}</UserContextProvider>
};
 