import React, { useContext } from "react";
import useAppReducer from "./reducer";
import ReactDOM from "react-dom";
import SafepointLocation from "./components/safepoint-location";
import { Tabs, TabContent, TabContainer } from "./components/tabs/tabs";

import "./styles.css";

function ContentContainer({ children }) {
  return <div>{children}</div>;
}

function App() {
  let [appState, dispatch] = useAppReducer();
  console.log("app state", appState);
  return (
    <TabContainer dispatch={dispatch} appState={appState}>
      <Tabs />
      <TabContent isVisible={appState.selectedTab === 1}>
        <SafepointLocation />
      </TabContent>
      <TabContent isVisible={appState.selectedTab === 2}>
        Safepoint Location2
        <SafepointLocation />
      </TabContent>
      <TabContent isVisible={appState.selectedTab === 3}>
        Emergency Contact
      </TabContent>
      <TabContent isVisible={appState.selectedTab === 4}>
        Emergency Kit
      </TabContent>
      <div>
        <button
          disabled={appState.selectedTab === 4}
          type="button"
          onClick={() =>
            dispatch({
              type: "NEXT_TAB",
              selectedTab: appState.selectedTab + 1
            })
          }
        >
          Next
        </button>
        <button
          disabled={appState.selectedTab === 1}
          type="button"
          onClick={() =>
            dispatch({
              type: "PREVIOUS_TAB",
              selectedTab: appState.selectedTab - 1
            })
          }
        >
          Previous
        </button>
      </div>
    </TabContainer>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
