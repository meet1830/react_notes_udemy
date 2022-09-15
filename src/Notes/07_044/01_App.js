// take the event object logged, and add it to the event list to be displyed in dom as an event
// create a new function inside the component, add the new event to the state and pass it as a prop to the neweventform component

import "./01_App.css";
import { useState } from "react";
import Title from "./02_Title";
import Modal from "./03_Modal";
import EventList from "./04_EventList";
import NewEventsForm from "./05_NewEventsForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
  ]);

  // take the curr state and add the new event to it. so depending on the previous events, that is previous state. for that we need to pass a func into the set events and that takes two arguments
  // return a new array which has the prev events and the new event that we want to add
  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })

    // want to close the modal after new event is created
    setShowModal(false)

    // can now delete the button inside the modal to close the modal from there. but can rename it to cancel
  }

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const substitle = "All the latest events in Marioland";

  return (
    <div className="App">
      <Title title="Events in Your Area" subtitle={substitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show events</button>
        </div>
      )}

      {showEvents && <EventList events={events} handleClick={handleClick}/> }
      
      {/* pass the func in the new event form, accepting that in the neweventsform.js */}
      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={true}>
          <NewEventsForm addEvent={addEvent} />
        </Modal>
      )}

      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;

// when we refresh the page all the events are gone because the array is empty every time we refresh the page, bc setting the initial events of the state to be empty array