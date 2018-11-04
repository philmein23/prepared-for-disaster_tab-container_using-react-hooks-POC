import { useReducer } from "react";

const initState = {
  selectedTab: 1
};

const reducer = (state = {}, action) => {
  if (action.type === "SELECT_TAB") {
    return { ...state, selectedTab: action.selectedTab };
  }

  if (action.type === "NEXT_TAB") {
    console.log("here");
    return { ...state, selectedTab: action.selectedTab };
  }

  if (action.type === "PREVIOUS_TAB") {
    return { ...state, selectedTab: action.selectedTab };
  }

  return state;
};

export default function useAppReducer() {
  const [state, dispatch] = useReducer(reducer, initState);

  return [state, dispatch];
}
