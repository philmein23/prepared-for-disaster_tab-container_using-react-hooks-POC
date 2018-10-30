import { useState } from "react";
import { useInputValue } from "./useInputValue";

let initialAddress = {
  line1: "",
  line2: "",
  line3: "",
  city: "",
  state: "",
  zipcode: ""
};

export function useAddress() {
  let line1 = useInputValue(initialAddress.line1);
  let line2 = useInputValue(initialAddress.line2);
  let line3 = useInputValue(initialAddress.line3);
  let city = useInputValue(initialAddress.city);
  let state = useInputValue(initialAddress.state);
  let zipcode = useInputValue(initialAddress.zipcode);

  console.log("address");

  return {
    line1,
    line2,
    line3,
    city,
    state,
    zipcode
  };
}
