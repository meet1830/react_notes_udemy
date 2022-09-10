import "./01_App.css";
import { useState } from "react";
import Title from "./02_Title";
import Modal from "./03_Modal";
import EventList from "./04_EventList";

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

      {/* if isSalesModal is true then dynamically some property and if false then other property */}
      
      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={true}>
          <h2>Terms and conditions</h2>
          <p>
            This is some random text which hs no meaning what so ever but I will
            make sure that it is grammatically correct no matter how hard I may
            need to try but dont worry I will not let grammer down.
          </p>
          <a href="www.google.com">Find out more...</a>
        </Modal>
      )}

      <div>
        <button onClick={() => setShowModal(true)}>Show modal</button>
      </div>
    </div>
  );
}

export default App;
