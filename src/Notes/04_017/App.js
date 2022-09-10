/* State is component data that might change over time
- in a todo app and the list of to do will be a react component. each time a new todo is added or a todo is deleted the data inside the list or the state of the component changes. can call the state = todos
- a dropdown will shows or hides the same content, in this the data does not change but the toggle of the dropdown like boolean true or false. state = isOpen(true or false)
*/

/* the new name will be assigned to name variable but the heading will not change. this is because the component is already evaluated and the name variable value is changed but does not pushed back to the component because the component code is already evaluted and does not go back there. hence this is state of the component and we need react to reevaluate the component with the updated value */

/* for this we use the useState hook. all hooks start with word 'use'. they are functions that do specific things */

/* useState hook is used for changing component state. when we use this hook to create state, whenever that state value changes, it triggers our component to be reevaluated with the new state value and as result new value will be reflected in dom */

function App() {
  let name = "mario";

  const handleClick = () => {
    name = "luigi";
    console.log(name);
  };

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
    </div>
  );
}

export default App;
