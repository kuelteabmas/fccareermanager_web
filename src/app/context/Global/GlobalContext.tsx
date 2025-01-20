"use client";
import React, { createContext, useContext } from "react";
import { GlobalStateType, GlobalActionType } from "./GlobalState";

export const GlobalContext = createContext<{
  state: GlobalStateType;
  dispatch: React.Dispatch<GlobalActionType>;
} | null>(null);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("useGlobalContext must be used within a GlobalProvider");
  return context;
};