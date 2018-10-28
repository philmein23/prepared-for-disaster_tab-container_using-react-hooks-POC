import { useReducer } from "react";

const initState = {
  selectedTab: 1
};

const reducer = (state = {}, action) => {
  if (action.type === "selectTab") {
    return { ...state, selectedTab: action.selectedTab };
  }

  return state;
};

export default function useAppReducer() {
  const [state, dispatch] = useReducer(reducer, initState);

  return [state, dispatch];
}
