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
            <button className={isSalesModal ? 'modal-btn' : ''} onClick={handleClose}>Cancel</button>
        </div>
    </div>
  ), document.body)
}