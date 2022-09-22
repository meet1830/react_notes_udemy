// getting the string as name and just logging out
// name can change and has to be passed as a dependency at the bottom
// it will run fine
// changing the name argument to options now as bringing object
// infinite loop of fetch request 
// this happens bc an object is of reference type and when we reevalute the component, useeffect sees ref type as changed value. same case as functions used as dependencies
// REMEMBER - if using any ref type like arrays, objects or functions, if they are used directly as dependencies then they will trigger an infinite loop
// two solutions - wrap the object in a state hook and pass the state as an argument to the fetch hook
// or include the object value in a useref hook and inside the custom hook itself
// _options to avoid name conflict
// pass this in useref with .current to get the current value

import { useState, useEffect, useRef } from "react";

const useFetch = (url, _options) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const options = useRef(_options).current

  useEffect(() => {
    console.log(options);

    const controller = new AbortController()

    const fetchData = async () => {
      setIsPending(true);

      try {
        const res = await fetch(url, {signal : controller.signal});

        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const json = await res.json();
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log('the fetch was aborted')
        } 
        else {
          setIsPending(false);
          setError("Could not fetch data");
        }
      }
    };

    fetchData();

    return () => {
      controller.abort()
    };
  }, [url, options]);

  return { data, isPending, error };
};

export default useFetch;
