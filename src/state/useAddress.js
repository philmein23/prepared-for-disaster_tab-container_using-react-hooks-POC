import { useState } from "react";
import { useInputValue } from "./useInputValue";

let initialAddress = {
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  zipcode: ""
};

export function useAddress() {
  let addressLine1 = useInputValue(initialAddress.addressLine1);
  let addressLine2 = useInputValue(initialAddress.addressLine2);
  let city = useInputValue(initialAddress.city);
  let state = useInputValue(initialAddress.state);
  let zipcode = useInputValue(initialAddress.zipcode);

  console.log("address");

  return {
    addressLine1,
    addressLine2,
    city,
    state,
    zipcode
  };
}
