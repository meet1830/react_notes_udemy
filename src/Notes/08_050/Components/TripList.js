// our dependency was an empty array hence runs only once. but if the api changes when user clicks on a button or etc. then we need dependencies. if the api link is going to change then we should store the url of the end point as some state
// the initial value of the new state will be the url itself
// so when url changes then useeffect will run, hence add url as a useeffect dependency
// added location to the database
// have to use different end point for each of the queries for loc, all europe same and america different
// adding onclick to both buttons to update the url when the user clicks it
// the url in both buttons will be same but with a query for loc to be europe or all the trips 
// anonymous function inside onclick or else seturl in it will be invoked automatically
// when state changes the component revaluation will take place by usestate seturl
// here just one parameter inside dep array but can have more than one


import React, { useState, useEffect } from "react";
import './TripList.css'

function TripList() {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips")

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setTrips(json));
  }, [url]);

  console.log(trips);

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      <ul>
        {trips.map(trip => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>

      <div className="filters">
        <button onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}>
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
