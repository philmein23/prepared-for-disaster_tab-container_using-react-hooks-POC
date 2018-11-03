import { useState } from "react";

export function useAsyncCallback(cb) {
  let [loading, setLoading] = useState(null);
  let [error, setError] = useState(null);
  console.log("async", loading, cb);
  return [
    async function(...props) {
      console.log("before set loading true");
      setLoading(true);
      setError(null);
      console.log("before try");
      try {
        console.log("after try");
        let result = await cb(...props);

        console.log("result", result);

        return result;
      } catch (e) {
        setError(e);
      } finally {
        console.log("finally");
        setLoading(false);
      }
    },
    { loading, error }
  ];
}
