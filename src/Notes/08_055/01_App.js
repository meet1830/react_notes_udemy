// here created button and a hook to hide the trips. 
// what if we click on the button while the fetch is still ongoing(3g networks) - before the data is seen on the screen, fetch is still working in bg, what happens when we click on hide trips button and unmount the trip list component
// in inspect - network - throttling - fast 3g. then when the fetch is working just click on the hide trips button - it will hide the trips but throw a warning of memory leak, cant perform a react state update on an unmounted component
// REACT 18 REMOVED THIS WARNING
// here fetch is async, hence when reload the app and fetch is started and immediately click on the hide trips button, then component is unmounted but the fetch being async keeps running in bg
// so have to use a clean up function to cancel async tasks in our case abort the fetch request


import { useState } from 'react'
import TripList from './Components/TripList'
import data from './data/db.json'

export default function App() {

  const [showTrips, setShowTrips] = useState(true)

  return (
    <div>
      <button onClick={() => setShowTrips(false)}>Hide trips</button>
      {showTrips && <TripList />}
    </div>
  )
}
