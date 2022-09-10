// another way to pass information in child components instead of regular props using the children prop
// children props are better than props bc in props our code is the same and we just pass the value for it. but if as created the modal here if we want to have an img in one modal and a signup and login form on another modal then we need to use children prop

import { useState } from "react";
import "./01_App.css";
import Title from "./02_Title";
import Modal from "./03_Modal";

function App() {
  const [showEvents, setShowEvents] = useState(true);

  const [events, setEvents] = useState([
    { title: `mario's birthday bash`, id: 1 },
    { title: `bower's live stream`, id: 2 },
    { title: `race on moo moo farm`, id: 3 },
  ]);

  console.log(showEvents);

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

      {/* using modal component */}
      {/* <Modal /> */}

      {/* using modal component with children prop 
      - use one opening and other closing tag like an html tag and paste the code for it
      - this template is the children for the modal
      - can access the children at the props object in the modal */}
      <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at checkout.</p>
      </Modal>

      {/* using same template for another modal */}
      {/* when rendering this sits right above the prev modal hence prev modal is not visible */}
      <Modal>
        <h2>Terms and conditions</h2>
        <p>Random text</p>
        <a href="www.google.com">Find out more...</a>
      </Modal>
    </div>
  );
}

export default App;
