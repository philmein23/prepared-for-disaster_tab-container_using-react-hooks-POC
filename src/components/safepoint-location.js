import React from "react";
import { useAddress } from "../state/useAddress";
import Input from "./input";
import useAppReducer from "../reducer";

export default function SafepointLocation() {
  let { addressLine1, addressLine2, city, state, zipcode } = useAddress();
  let [_, dispatch] = useAppReducer();

  console.log(addressLine1, addressLine2, city, state, zipcode);
  return (
    <form>
      <h1>Safepoint Location</h1>
      <Input label={"Address Line 1"} type={"text"} {...addressLine1} />
      <Input label={"Address Line 2"} type={"text"} {...addressLine2} />
      <Input label={"City"} type={"text"} {...city} />
      <Input label={"State"} type={"text"} {...state} />
      <Input label={"Zip Code"} type={"text"} {...zipcode} />
    </form>
  );
}
