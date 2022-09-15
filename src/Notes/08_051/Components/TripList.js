// what if the dep in the dep array for useeffect was a function, here want to extract all the fetch logic in its own function
// now the function can be async

import React, { useState, useEffect, useCallback } from "react";
import "./TripList.css";

function TripList() {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips");

  /*
  
  const fetchTrips = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setTrips(json);
  };


  useEffect(() => {
    fetchTrips();
  }, [url]);
  
  */

  // after this there is a warning shown in the browser console that the function is being called elsewhere hence it should be passed as a dependency. if we do it then there is an infinite loop of fetches. this is because, each time the ffetchtrips is called, another copy of the fetched data is created an stored elsewhere in the memory and the references to them are compared which are different hence fetchtrips changes with the same value
  // if it was an array or an object then same result but they can be passed in a usestate hook and because of this copies will not be created, but for fuctions we have to pass fetchtrips in a useCallback hook to not fire useeffect again and again
  // use callback creates a cached version of the data and hence not called again
  // second argument again dependency and we pass url because if the url is changed then usecallback needs to be called which will call useeffect
  // now instead of both the arguments url and fetchtrips now need only fetchtrips bc whenever url changes and new function is triggered, will triger useeffect to run

  // remember -> if using a function, object or array as a dependency then react will see that dependency is changed for every component valuation. for obj and array use usestate, for function use usecallback along with the dependency array

  const fetchTrips = useCallback(async () => {
    const response = await fetch(url);
    const json = await response.json();
    setTrips(json);
  }, [url]);

  useEffect(() => {
    fetchTrips();
  }, [fetchTrips])

  console.log(trips);

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>

      <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}
        >
          European Trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All Trips
        </button>
      </div>
    </div>
  );
}

export default TripList;
