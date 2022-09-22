// here in fetch we are passing url as a state in the fetch. but if we were passing an argument which is not a state such as any array or object or function, then can run in some problem
// passing second argument to show this
// passing a primitve argument string
// now go to usefetch hook
// but now passing an object that has type property to specify type of request

import React, { useState } from "react";
import "./TripList.css";

import useFetch from "../hooks/useFetch";

function TripList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");

  // const { data: trips, isPending, error } = useFetch(url, 'meet');
  const { data: trips, isPending, error } = useFetch(url, {type: 'GET'});

  return (
    <div className="trip-list">
      <h2>Trip List</h2>

      {isPending && <div>Loading Trips...</div>}

      {error && <div>{error}</div>}

      <ul>
        {trips &&
          trips.map((trip) => (
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
