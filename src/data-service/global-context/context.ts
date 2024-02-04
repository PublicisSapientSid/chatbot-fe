import { createContext, Dispatch } from "react";
import { IGlobalStateProps } from "./types";

export const GlobalContext = createContext<{
  state: IGlobalStateProps;
  dispatch: Dispatch<any>;
}>({
  state: {
    isLoading: false,
    toastMessage: "",
    chats: [],
    children: null,
  },
  dispatch: (_value) => {},
});
