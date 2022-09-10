// portals -> it is a way for us to take a component and render it somewhere else in the dom outside the scope of its parent component
// the modal we use here normally on webpages is outputted somewhere else in the dom or output at the bottom of the page
// need to import react-dom bc that is used to create portals
// portal first argument the template that we want to move somwehere else, second argument where in the dom we wnat to move the template, use any dom mnanipulaton method like query selector, getelebyid, etc

import ReactDOM from 'react-dom'
import './03_Modal.css'

export default function Modal({children, handleClose}) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
        <div className='modal'>
            {children}
            <button onClick={handleClose}>Close</button>
        </div>
    </div>
  ), document.body)
}

// now we can see that when the modal is opened then the code appears at the end of body tag in inspect elements
// also need to take care of that when the code is moved the style applied to it may no longer work as in this case it is taken out of the original position and is taken somewhere else