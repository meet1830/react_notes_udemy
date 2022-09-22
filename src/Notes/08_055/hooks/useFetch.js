// triplist component is using the fetch hook it is also using indirectly the useeffect defined in this hook. so when triplist component unmounts it fires the cleanup function
// abort all sync inside the function, using abort controller in js
// define controller and associate it with hook
// fetch can take another argument - options argument which is an object - to specify things like headers or request method like get or post
// here set signal property
// now abort it inside return function
// abort method looks for any fetch requests associated with the controller and stops them immediately 
// when this happens fetch throws a unique error which catched here and we can check for it
// logging out that error and not want to update the seterror and other now hence put them in else
// REMEMBER - the clean up function that we return from useeffect fires whenever the component that we are using the useeffect hook on unmounts. here triplist component as it uses the fetch hook where useeffect hook is nested
// output the error message it logged and it is not trying to update the state anymore
// it is always a good practice to use this cleanup function when using any async tasks

import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {

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
          console.log(err.message);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort()
    };
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
