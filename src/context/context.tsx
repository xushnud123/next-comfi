"use client";
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface GlobalContent {
  openMail: boolean;
  setOpenMail: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<GlobalContent>({
  openMail: false,
  setOpenMail: () => {},
});

interface MyComponentProps {
  children: ReactNode;
}

const ContextProvider: FC<MyComponentProps> = ({ children }) => {
  const [openMail, setOpenMail] = useState<boolean>(false);
  return (
    <GlobalContext.Provider value={{ openMail, setOpenMail }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export default ContextProvider;
