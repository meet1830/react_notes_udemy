import React from 'react'

function Random(props) {
  return (
    <React.Fragment key={props.id}>
        <h2>Hello Random</h2>
    </React.Fragment>
    // when using a prop on the div then cannot use fragemet. If want to use then have to first import react lib and then use react.fragment. <></> is a short hand of creating a fragment actual can be created using fragment method 
  )
}

export default Random