// if the url passed to the state is incorrect then will return 404 error. but can show user some error message if this happens.
// so creating a state for that
// initial value for state null since we dont have error
// using try catch
// ispending to false inside catch block because the try block will fail at the fetch itself and move to catch block hence need to set it to false
// also inside try block if prev had some error and now entered correct url, then also the error will keep showing hence set seterr(null) in try block
// here when the network is disconnected then the catch block will work. if the url is wrong then still will get a response and no error will be thrown. response status - 404 and statustext - not found, also another property called 'ok' = false. can check for this property and manually throw error
// when throw an error, then it will redirect to catch block and the argument passed will be taken as the error and will be printed as err.message
// return the error state to be able to show error in dom

import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);

      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const json = await res.json();
        setIsPending(false);
        setData(json);

        setError(null);
      } catch (err) {
        setIsPending(false);
        setError("Could not fetch data");
        console.log(err.message);
      }
    };

    fetchData();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
