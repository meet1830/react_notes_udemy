// if our project involves more components and each component has to fetch some data then the fetchtrips code will be repeated for each. hard to maintain and update
// making custom hook for this

import React, { useState } from "react";
import "./TripList.css";

// import { useFetch } from "../hooks/useFetch";
import useFetch from "../hooks/useFetch";
// deleting trips state
// can destructure the return value
// can use {data} only instead of {data : trips} but need to change variable name in map
// initially the trips is null hence the map will cause an error hence add && condition
// will get error, remember cannot export default if using {} to import
// if exporting in the beginning then use curly braces after removing default in custom hook, if exporting afterwards, then remove curly braces

function TripList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");

  const { data: trips } = useFetch(url);

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
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
