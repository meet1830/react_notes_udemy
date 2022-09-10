// we can also pass functions as props in components
// normally we will need to use this when the child component needs to manipulate states in the parent component
/* the button defined in modal will be there for all modals no matter what the children are. we user clicks the modal will be closed. but we cannot directly alter the state in the child modal component because the state is not defined. we have to change the state inside the component where it was defined that is inside the parent component. 
- for this we need to create a function inside the parent component that updates the state */

import { useState } from "react";
import "./01_App.css";
import Title from "./02_Title";
import Modal from "./03_Modal";

function App() {
  // show that modal = true, hide it = false
  const [showModal, setShowModal] = useState(true);

  const [showEvents, setShowEvents] = useState(true);

  const [events, setEvents] = useState([
    { title: `mario's birthday bash`, id: 1 },
    { title: `bower's live stream`, id: 2 },
    { title: `race on moo moo farm`, id: 3 },
  ]);

  // when the page reloads, that is when the value is true, we need to show the modal again, to test this
  // log default will be printed true and if clicked close then will print false
  console.log(showModal);

  // define function to close handle function
  const handleClose = () => {
    setShowModal(false)
  }

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  const substitle = "All the latest events in Marioland";

  return (
    <div className="App">
      <Title title="Events in Your Area" subtitle={substitle} />

      <Title title="Just another title" subtitle="another subtitle" />

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

      {showEvents &&
        events.map((event, index) => (
          <div key={event.id}>
            <h2>
              {index} - {event.title}
            </h2>

            <button onClick={() => handleClick(event.id)}>Delete event</button>
          </div>
        ))}
      
      {/* pass the function as a prop into the modal */}
      {/* show the modal only if showmodal is true */}
      {showModal && <Modal handleClose={handleClose}>
        <h2>Terms and conditions</h2>
        <p>
          This is some random text which hs no meaning what so ever but I will
          make sure that it is grammatically correct no matter how hard I may
          need to try but dont worry I will not let grammer down.
        </p>
        <a href="www.google.com">Find out more...</a>
      </Modal>}
    </div>
  );
}

export default App;

// could also put button as a child in the modal here and then it could directly access the state. it would be easier
// but use this option to pass functions as props when do not have an option to pass in the child