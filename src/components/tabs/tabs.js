import React, { useContext } from "react";
import useAppReducer from "../../reducer";
import { TabSwitchContext } from "../../index";

const tabs = [
  { label: "Safepoint Location", tabId: 1 },
  { label: "Safepoint Location 2 ", tabId: 2 },
  { label: "Emergency Contact", tabId: 3 },
  { label: "Emergency Kit", tabId: 4 }
];

function Tab({ tabId, label }) {
  const { appState, dispatch } = useContext(TabSwitchContext);

  const handleClick = tabId => {
    dispatch({ type: "SELECT_TAB", selectedTab: tabId });
  };
  return (
    <TabButton
      isSelected={appState.selectedTab === tabId}
      onClick={() => handleClick(tabId)}
    >
      {label}
    </TabButton>
  );
}

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

export function Tabs() {
  return tabs.map(tab => {
    return <Tab label={tab.label} tabId={tab.tabId} />;
  });
}

export function TabContent({ isVisible, children }) {
  if (!isVisible) {
    return <div>{null}</div>;
  }

  if (isVisible) {
    return <div>{children}</div>;
  }
}
