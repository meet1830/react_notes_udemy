// refs are a way to get ref to dom element directly, like in js for eg using query selector
// get those refs using hook useRef

import { useRef } from 'react'
import './05_NewEventsForm.css'

export default function NewEventsForm({addEvent}) {
  // const [title, setTitle] = useState('')
  // const [date, setDate] = useState('')
  
  // create a blank ref which can then be associated with dom elements
  const title = useRef()
  const date = useRef()

  // we need to update the current value of each of the diff refs to be an empty string
  const resetForm = () => {
    // setTitle('')
    // setDate('')

    title.current.value = ''
    date.current.value = ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(title, date)
    /*
    Object
      current: input
      [[Prototype]]: Object
    
    Object
      current: input
      [[Prototype]]: Object
    */
    // curr property is the curr element associated with the curr ref, expanding it, it will have value property which shows the current value of input field

    const event = {
      title: title.current.value,
      date: date.current.value,
      id: Math.floor(Math.random() * 10000)
    }

    addEvent(event)

    resetForm()
  }

  return (
    // remove onchange and value from the inputs
    <form className='new-event-form' onSubmit={handleSubmit}>
        <label>
            <span>Event Title: </span>
            {/* add a ref attr to the element to which we want ref to associate */}
            <input type='text' ref={title}/>
        </label>

        <label>
            <span>Event Date: </span>
            <input type='date' ref={date}/>
        </label>

        <button>Submit</button>
    </form>
  )
}