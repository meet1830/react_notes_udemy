

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
