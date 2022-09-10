// react fragments - does not show up the dom and does the work of wrapping elements

import React from 'react'
import Random from './02_Random'

function App() {
  return (
    <>
      <h1>Using react fragments</h1>
      <Random id='1'/>
    </>
  )
}

export default App