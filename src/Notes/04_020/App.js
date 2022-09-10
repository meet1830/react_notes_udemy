// how to output a list of data using map method

import {useState} from 'react'

function App() {
  const [name, setName] = useState('mario')

  const [events, setEvents] = useState([
    {title: `mario's birthday bash`, id: 1},
    {title: `bower's live stream`, id: 2},
    {title: `race on moo moo farm`, id: 3},
  ])
  // array of objects where each object is an event

  const handleClick = () => {
    setName('luigi')
    console.log(name)
  };

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>

      {/* -------------- */}

      {/* 
      - curly braces because using js function 
      - map method fires function for each item inside array
      - for each item we can return some jsx that will be template for that item
      - when returning jsx we return it inside parenthesis () where arrow is return
      - after event.title is reflected into h2 get a warning in the console that a child in the list should have a unique key prop
      - key prop is that we can keep track of template items in an array or list like this. here we are populating divs which does not have any uniqueness other than the content. so each item in the list should have its unique identifier and then react will keep track of items in list
      - it will be useful in data changing for eg if want to delete an item then will delete it using identifier
      - hence add event.id
      - in map also get access to index of item as second parameter hene can use that too
      */}
      {events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
        </div>
      ))}

    </div>
  );
}

export default App;
