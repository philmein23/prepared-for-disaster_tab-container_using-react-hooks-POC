import { useState } from "react";

export function useInputValue(initialValue) {
  let [value, setValue] = useState(initialValue);

  function onChange(event) {
    setValue(event.target.value);
  }

  console.log("value", value);

  return {
    value,
    onChange
  };
}
