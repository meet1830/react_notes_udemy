// modal is a pop up like sign up or login

import './03_Modal.css'

export default function Modal({children}) {
  return (
    <div className="modal-backdrop">
        <div className='modal'>
            {/* will get whatever the children is passed inside the modal component */}
            {/* {props.children}when using the arguement props */}

            {/* when using destructuring */}
            {children}
        </div>
    </div>
  )
}
