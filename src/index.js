import React, { useState } from "react";
import useAppReducer from "./reducer";
import ReactDOM from "react-dom";
import { useAsyncCallback } from "./state/useAsyncCallback";
import SafepointLocation from "./components/safepoint-location";

import "./styles.css";

const tabs = [
  { label: "Safepoint Location", tabId: 1 },
  { label: "Safepoint Location 2 ", tabId: 2 },
  { label: "Emergency Contact", tabId: 3 },
  { label: "Emergency Kit", tabId: 4 }
];

function TabButton({ isSelected, onClick, children }) {
  return (
    <button
      className={`tab ${isSelected} ? "tab-selected" : ""`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Tab({ tabId, label }) {
  const [state, dispatch] = useAppReducer();

  const handleClick = tabId => {
    console.log("click");
    dispatch({ type: "selectTab", selectedTab: tabId });
  };
  console.log("state", state);
  return (
    <TabButton
      isSelected={state.selectedTab === tabId}
      onClick={() => handleClick(tabId)}
    >
      {label}
    </TabButton>
  );
}

function Tabs() {
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

function MyAsyncButton(props) {
  let [onClick, { loading, error }] = useAsyncCallback(props.onClick);

  console.log("render", loading, error);

  return (
    <div>
      {error && <span>{error}</span>}
      <button onClick={onClick}>{loading ? "Saving..." : "Save"}</button>
    </div>
  );
}

function ContentContainer({ children }) {
  return <div>{children}</div>;
}

function App() {
  let [appState] = useAppReducer();

  return (
    <>
      <Tabs />
      <TabContent isVisible={appState.selectedTab === 1}>
        <SafepointLocation />
        <MyAsyncButton onClick={() => Promise.resolve({ resolved: true })} />
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
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
