import React, { } from 'react'

function CompleteSideModal ({ sideComplete }) {
  setTimeout(sideComplete, 3000)
  return (
    <div className="front-modal-container center-vert-horz">
      <h1 className='front-modal-msg center-vert-horz'>Successfully captured side measurements!</h1>
  </div>
  )
}

export default CompleteSideModal
