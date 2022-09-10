// dynamic styles means set the value for the css property as per a condition
// using ternary operator to change the color dynamically if true then border will be orange and if false im app.js then gray

// can also apply classes on an element based on some condition. called conditional css classes
// if salesmodal false then dont apply any class but if true then apply class

import ReactDOM from 'react-dom'
import './03_Modal.css'

export default function Modal({children, handleClose, isSalesModal}) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
        <div className='modal' style={{
          border: '4px solid',
          borderColor: isSalesModal ? '#ff4500' : '#555',
          textAlign: 'center'
        }}>
            {children}
            <button className={isSalesModal ? 'modal-btn' : ''} onClick={handleClose}>Close</button>
        </div>
    </div>
  ), document.body)
}