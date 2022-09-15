// using select boxes. it uses state and onchange event handler in react

import { useState } from 'react'
import './05_NewEventsForm.css'

export default function NewEventsForm({addEvent}) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')

  // adding new state for location
  const [location, setLocation] = useState('manchester')

  // resetting location
  const resetForm = () => {
    setTitle('')
    setDate('')
    setLocation('manchester')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // adding location
    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000)
    }

    console.log(event)

    addEvent(event)

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

        <label>
          <span>Event Location: </span>
          <select onChange={(e) => setLocation(e.target.value)}>
            <option value='manchester'>Manchester</option>
            <option value='london'>London</option>
            <option value='cardiff'>Cardiff</option>
          </select>
        </label>

        <button>Submit</button>
    </form>
  )
}