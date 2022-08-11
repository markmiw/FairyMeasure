import React, { } from 'react'
import body from '../assets/icons/standing-human-body-silhouette-svgrepo-com.svg'

function SideModal ({sideReady}) {
  setTimeout(sideReady, 5000);
  return (
    <div className="front-modal-container center-vert-horz" tabIndex="-1" role="dialog">
      <h1 className='front-modal-msg center-horz'>Please stand back so your whole body fits within the image</h1>
      <img className='front-body-overlay center-vert-horz ' src={body}></img>
  </div>
  )
}

export default SideModal
