// when we click on a button inside a form that fires a submit event. we can listen to this event with onsubmit. dont attach it to the button bc it is the form which emits the submit event

import { useState } from 'react'
import './05_NewEventsForm.css'

function NewEventsForm() {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')

  const resetForm = () => {
    setTitle('')
    setDate('')
  }

  const handleSubmit = (e) => {
    // default behavior to refresh the page when the form is submitted by clicking the button
    e.preventDefault()

    // each event added should have its unique id
    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 10000)
    }

    console.log(event)

    resetForm()
  }

  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
        <label>
            <span>Event Title: </span>
            <input type='text' onChange={(e) => setTitle(e.target.value)} value={title}/>
        </label>

        <label>
            <span>Event Date: </span>
            <input type='date' onChange={(e) => setDate(e.target.value)} value={date}/>
        </label>

        <button>Submit</button>
    </form>
  )
}

export default NewEventsForm

/* output
{title: 'Meet', date: '2022-09-30', id: 988}
  date: "2022-09-30"
  id: 988
  title: "Meet"
  [[Prototype]]: Object
*/