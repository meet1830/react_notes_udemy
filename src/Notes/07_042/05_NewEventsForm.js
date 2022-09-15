import { useState } from 'react'
import './05_NewEventsForm.css'

function NewEventsForm() {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')

  const resetForm = () => {
    setTitle('')
    setDate('')
    // just using this without the value property will not reset the input fields, but will only set the display title and date as empty strings
    // as the value of the input matches the state value when this function runs in the input tags, it will update the tags
    // connection has to be 2 way -> between the input and the state of onchange, but also from the state to the input with value attribute
    // called controlled input - when state is changed, updating the value to match that state inside the inputs and controlling the input value from the outside the input
  }

  return (
    <form className='new-event-form'>
        <label>
            <span>Event Title: </span>
            <input type='text' onChange={(e) => setTitle(e.target.value)} value={title}/>
        </label>

        <label>
            <span>Event Date: </span>
            <input type='date' onChange={(e) => setDate(e.target.value)} value={date}/>
        </label>

        <button>Submit</button>

        <p>title - {title}, date - {date}</p>
        <p onClick={resetForm}>Reset the form</p>
    </form>
  )
}

export default NewEventsForm