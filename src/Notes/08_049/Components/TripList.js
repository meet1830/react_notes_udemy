// use effect allows us to run some code only at specific times when certain conditions are met
// useeffect does not need a storage value, it has arguments -> function, dependency array
// when component runs the very first time useeffect automatically also runs with it, and when the component is reevaluted after some state update the useffect only runs when if any of its dependencies have changed
// here empty array is passed, so now useeffect will not run second time whatever may be the change in its dependency. hence can always use this if want to run useffect only once
// hence useeffect can be used to fetch data since we are not refetching it
// the function inside the useffect is by default an async function, hence cannot use async beside it and cannot use await inside it. to overcome this we can nest async functions and invoke them. hence using .then property here and not async await to fetch
// li tag has to have a key property in map in jsx in react

import React, { useState, useEffect } from "react";
import './TripList.css'

function TripList() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/trips")
      .then((response) => response.json())
      .then((json) => setTrips(json));
  }, []);

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
    </div>
  );
}

export default TripList;
