// passing url inside the hook and can use this to fetch data
// name the hook as generic as possible
// defining function inside the useeffect itself so dont have to add the new function as a dependency
// fetchdata defined but also need to invoke to fetch the data
// now need to return the fetched data - in a custom hook will always return some value - will be an array of values like in usestate or or could be an object of different properties with values
// here using objects - return an object with property data with value as data state with using object property assignment

import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, [url]);

  return { data };
};

export default useFetch;