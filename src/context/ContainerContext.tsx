import React, {
  createContext,
  PropsWithChildren,
  useState,
  ReactNode,
  useContext,
} from "react";

interface ContainerContextInterface {
  showingPage: string | null;
  project: number;
  showingGrid: boolean;
  setShowingGrid: React.Dispatch<React.SetStateAction<boolean>>;
  setProject: React.Dispatch<React.SetStateAction<number>>;
  setShowingPage: React.Dispatch<React.SetStateAction<string>>;
}

type ChildrenProps = {
  children: JSX.Element;
};

const ContainerContext = createContext<ContainerContextInterface | null>(null);

const ContainerContextProvider = ({ children }: ChildrenProps) => {
  const [showingPage, setShowingPage] = useState("");
  const [project, setProject] = useState(1);
  const [showingGrid, setShowingGrid] = useState(true);
  return (
    <ContainerContext.Provider value={{ showingGrid, setShowingGrid, showingPage, setShowingPage, project, setProject }}>
      {children}
    </ContainerContext.Provider>
  );
};

export {
  ContainerContext,
  ContainerContextProvider,
};
