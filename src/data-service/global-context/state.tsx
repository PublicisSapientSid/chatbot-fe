import { FC, useReducer } from "react";
import { GlobalContext } from "./context";
import { IGlobalStateProps } from "./types";
import { GlobalReducer } from "./reducer";

export const initialGlobalState: IGlobalStateProps = {
  isLoading: false,
  toastMessage: "",
  chats: [],
  children: null,
};

export const GlobalState: FC<IGlobalStateProps> = ({
  children,
  isLoading,
  toastMessage,
  chats,
}) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialGlobalState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
