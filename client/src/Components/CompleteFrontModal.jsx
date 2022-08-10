import React, { } from 'react'

function CompleteFrontModal ({frontComplete}) {
  setTimeout(frontComplete, 3000);
  return (
    <div className="front-modal-container center-vert-horz">
      <h1 className='front-modal-msg center-vert-horz'>Successfully captured front measurements!</h1>
  </div>
  )
}

export default CompleteFrontModal;
