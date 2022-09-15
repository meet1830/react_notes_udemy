// want to fetch some data inside this component. we use fetch api
// enter the json-server url inside fetch
// response.json is async and also takes some time hence returns a promise and hence another .then
// inside another terminal (in first one json server is running) run the react app
// always run json server first so that it runs on port 3000 and then react app so that it can run on some another port
// store the data from the fetch in some state so that can use that state to cycle through it and output a template for each trip
// if the usestate is used to update the trips state in the fetch api, then after fetching usetrips runs the component again and again the same data is fetched. this runs for infinite time. hence use useeffect state here
// useeffect alows us to perform component side effect, the code inside it being in relation to the component but not necessarily every time we reevalute the component

import React, { useState } from "react";

function TripList() {
  fetch("http://localhost:3000/trips")
    .then((response) => response.json())
    .then((json) => setTrips(json));

  const [trips, setTrips] = useState([]);

  console.log(trips);

  return (
    <div>
      <h2>Trip List</h2>
    </div>
  );
}

export default TripList;
