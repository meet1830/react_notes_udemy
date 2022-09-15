import { useState } from 'react'
import './05_NewEventsForm.css'

function NewEventsForm() {
  // creating state for saving onchange grabbed value
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')

  // const handleChange = (e) => {
  //   console.log(e.target.value)
  //   setTitle(e.target.value)
  // }

  return (
    <form className='new-event-form'>
        <label>
            <span>Event Title: </span>
            <input type='text' onChange={(e) => setTitle(e.target.value)}/>
            {/* using anonymous function to change the state value */}
        </label>

        <label>
            <span>Event Date: </span>
            <input type='date' onChange={(e) => setDate(e.target.value)} />
        </label>

        <button>Submit</button>

        {/* displaying the grabbed title and date in the modal */}
        <p>title - {title}, date - {date}</p>
    </form>
  )
}

export default NewEventsForm