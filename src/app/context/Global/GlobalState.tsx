import React, { useReducer } from "react";
import { GlobalContext } from "./GlobalContext";
import { globalReducer } from "./GlobalReducer";

export interface GlobalStateType {
  isLoading: boolean;
  error: string | null;
}

export type GlobalActionType =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null };

const initialState: GlobalStateType = {
  isLoading: false,
  error: null,
};

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
