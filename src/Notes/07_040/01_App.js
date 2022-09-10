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
    { title: `mario's birthday bash`, id: 1 },
    { title: `bower's live stream`, id: 2 },
    { title: `race on moo moo farm`, id: 3 },
  ]);

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
      
      {/* changing the modal to create a new event by filling a form in it - nesting the create new event form template in the modal */}
      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={true}>
          <NewEventsForm />
        </Modal>
      )}

      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;
