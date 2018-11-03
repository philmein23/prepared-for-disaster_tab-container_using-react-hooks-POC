import React from "react";
import { useAddress } from "../state/useAddress";
import Input from "./input";

export default function SafepointLocation() {
  let { line1, line2, line3, city, state, zipcode } = useAddress();

  console.log(line1, line2, line3, city, state, zipcode);
  return (
    <form>
      <h1>Safepoint Location</h1>
      <Input label={"Line 1"} type={"text"} {...line1} />
      <div>
        <label htmlFor="line2">Line 2</label>
        <input type="text" {...line2} />
      </div>
      <div>
        <label htmlFor="line3">Line 3</label>
        <input type="text" {...line3} />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input type="text" {...city} />
      </div>
      <div>
        <label htmlFor="state">State</label>
        <input type="text" {...state} />
      </div>
      <div>
        <label htmlFor="zipcode">Zip Code</label>
        <input type="text" {...zipcode} />
      </div>
    </form>
  );
}
