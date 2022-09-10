import {useState} from 'react'

// syntax
// import {useState, another hook, ...} from 'react'

function App() {
  const [name, setName] = useState('mario')
  // can be anything string, boolean, array, etc. then use array destructuring to grab the two values that this state returns inside the array
  // name = actual initial state value
  // setName = function we would use to change that state value. in function argument just pass the new value
  // setname takes in the new value and also triggers to rerun the component function

  // the console.log still prints old value mario because the log is done before the component is rerun (react behavior) even though the setname is called before the log happens

  const handleClick = () => {
    setName('luigi')
    console.log(name)
  };

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
    </div>
  );
}

export default App;
