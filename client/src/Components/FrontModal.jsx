import React, { } from 'react'
import body from '../assets/icons/standing-human-body-silhouette-svgrepo-com.svg'

function FrontModal ({ frontReady }) {
  setTimeout(frontReady, 5000)
  return (
    <div className="front-modal-container" tabIndex="-1" role="dialog">
      <div className='center-vert-horz'>
      <h1 className='front-modal-msg'>Please stand back so your whole body fits within the window</h1>
      <img className='front-body-overlay' src={body}></img>
      </div>
  </div>
  )
}

export default FrontModal
