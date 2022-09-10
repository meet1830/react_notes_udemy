// Props are a way in react to pass data from a parent component to a child component
// Props can be any data structure
// advantage is we can use the same template of child component inside the parent component but pass different data to it

import { useState } from "react";
import './01_App.css'
import Title from "./02_Title";

function App() {
  const [showEvents, setShowEvents] = useState(true);

  const [events, setEvents] = useState([
    { title: `mario's birthday bash`, id: 1 },
    { title: `bower's live stream`, id: 2 },
    { title: `race on moo moo farm`, id: 3 }
  ]);

  console.log(showEvents);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  const substitle = 'All the latest events in Marioland';

  return (
    <div className="App">

      {/* passing prop to title component
      can pass multiple props */}
      <Title title='Events in Your Area' subtitle={substitle}/>

      {/* reusing the title component for showcasing usecase for props */}
      <Title title='Just another title' subtitle='another subtitle'/>

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
    </div>
  );
}

export default App;

