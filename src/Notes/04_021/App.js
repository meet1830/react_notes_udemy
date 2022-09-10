// how to update the state

import { useState } from "react";

function App() {
  const [events, setEvents] = useState([
    { title: `mario's birthday bash`, id: 1 },
    { title: `bower's live stream`, id: 2 },
    { title: `race on moo moo farm`, id: 3 },
  ]);

  /* adding a button which if clicked will delete the event 
  - if passed the argument like handleClick(id) then it will invoke the function without click.
  - for this surround it with an anonymous function that does not invoke by itself - gives a reference to the handle click function 
  - now return an array with array filter method which does not contain the event with the passed id 
  - filter method if return true then will be included in the returned array and if returned false for that item then will not be included in the ans array 
  - this will work but the way react works is it schedules the implementation of setEvents in near future and here directly the events array is passed hence it might happen that the array is updated before the function is executed and hence it may not execute
  - instead pass a function in the setevents which returns a new state value
  */
 /*
  const handleClick = (id) => {
    setEvents(events.filter((event) => {
      return id !== event.id
    }))
    console.log(id)
  };
  */

  /*
  - now when state updates it fires this function 
  - inside the function return the updated state value
  - this function takes in the prev state value at the point of updating this state and that value will be up to date
  - rule of thumb - whenever the state update depends on the prev state that we are updating always use a callback function to access the prev state first and then make update on that prev value
  - if state update does not depend on the prev update there is no need to do this
  */
  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
  }

  return (
    <div className="App">
      {events.map((event, index) => (
        <div key={event.id}>
          <h2>
            {index} - {event.title}
          </h2>

          <button onClick={() => handleClick(event.id)}>Delete event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
