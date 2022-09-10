// no action attribute in form tag here. 
// htmlFor is the jsx for 'for' attribute in html

import './05_NewEventsForm.css'

function NewEventsForm() {
  return (
    <form className='new-event-form'>
        {/* working normally with forms with connecting input and label with id */}
        {/*
        <label htmlFor='title'>Event Title: </label>
        <input type='text' id='title' />
        */}

        {/* new way of associating input with label */}
        <label>
            <span>Event Title: </span>
            <input type='text' />
        </label>

        <label>
            <span>Event Date: </span>
            <input type='date' />
        </label>

        <button>Submit</button>
    </form>
  )
}

export default NewEventsForm