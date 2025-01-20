import { GlobalStateType, GlobalActionType } from "./GlobalState";

export const globalReducer = (state: GlobalStateType, action: GlobalActionType): GlobalStateType => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
