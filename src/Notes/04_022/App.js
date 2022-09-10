// state can also be used to conditionally output parts of a template based on that state
// for eg state is boolean. if true then we can show some content and if false then we can hide some content
// what we want to do is we want to show the events if our state is true and hide the events if false
import { useState } from "react";

function App() {
  const [showEvents, setShowEvents] = useState(true);

  const [events, setEvents] = useState([
    { title: `mario's birthday bash`, id: 1 },
    { title: `bower's live stream`, id: 2 },
    { title: `race on moo moo farm`, id: 3 }
  ]);

  console.log(showEvents);
  // the default value logged out on console before us doing anything is true, then if we click hide events them false is logged out and if show events then true is logged out

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  return (
    <div className="App">
      {/* now after showing and hiding events, we want to show the hide events button only when the events are showing and the show button only when the events are hidden */}
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

      {/* if show events is true then only the map function will run */}
      {/* if value is triggered false then due to hooks the component will be reevaluated and thus nothing will show as showevents is false */}
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

/*
Limitations of hooks
- can only use hooks in the top level of the component, that is not in the handleclick func. 
- exception to the above is when we make custom hooks
- hook has to be used within the scope of the component, that is cannot use it outside App function
*/
