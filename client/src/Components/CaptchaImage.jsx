import React, { useState } from 'react'

function CaptchaImage ({ url, selectedCount, setSelectedCount, selectedWaifuCount, selectedPics, setSelectedPics, index }) {
  return (
    <div style={{
      width: '100px',
      height: '100px'
    }}>
      <img
      draggable="false"
      onClick={(e) => {
        if (selectedPics[index]) {
          if (url[1] === 1) {
            selectedWaifuCount--
          }
          setSelectedCount(selectedCount - 1)
        } else {
          if (url[1] === 1) {
            selectedWaifuCount++
          }
          setSelectedCount(selectedCount + 1)
        }
        const selected = [...selectedPics]
        selected[index] = !selected[index]
        setSelectedPics(selected)
      }}
      src={url[0]}
      value={url[1]}
      alt="captcha"
      style={{
        opacity: `${selectedPics[index] ? '50%' : '100%'}`,
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        cursor: 'pointer'
      }} />
    </div>
  )
}
export default CaptchaImage
