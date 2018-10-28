import React, { useState } from "react";
import useAppReducer from "./reducer";
import ReactDOM from "react-dom";

import "./styles.css";

const tabs = [
  { label: "Safepoint Location", tabId: 1 },
  { label: "Safepoint Location 2 ", tabId: 2 },
  { label: "Emergency Contact", tabId: 3 },
  { label: "Emergency Kit", tabId: 4 }
];

function Tab({ tabId, label }) {
  const [state, dispatch] = useAppReducer();

  const handleClick = tabId => {
    console.log("click");
    dispatch({ type: "selectTab", selectedTab: tabId });
  };
  console.log("state", state);
  return <button onClick={() => handleClick(tabId)}>{label}</button>;
}

function Tabs({ children }) {
  return tabs.map(tab => {
    return <Tab label={tab.label} tabId={tab.tabId} />;
  });
}

function TabContent({ isVisible, children }) {
  if (!isVisible) {
    return <div>{null}</div>;
  }

  if (isVisible) {
    return <div>{children}</div>;
  }
}

function App() {
  const [state] = useAppReducer();
  console.log("stateeee", state);
  return (
    <>
      <Tabs />
      <TabContent isVisible={state.selectedTab === 1}>
        Safepoint Location
      </TabContent>
      <TabContent isVisible={state.selectedTab === 2}>
        Safepoint Location2
      </TabContent>
      <TabContent isVisible={state.selectedTab === 3}>
        Emergency Contact
      </TabContent>
      <TabContent isVisible={state.selectedTab === 4}>Emergency Kit</TabContent>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
