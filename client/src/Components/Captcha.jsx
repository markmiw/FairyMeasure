import React, { useState } from 'react'
import captcha_icon from '../assets/icons/captcha.svg'
import check from '../assets/icons/check.png'
import WaifuCaptcha from './WaifuCaptcha.jsx'

const Captcha = ({ captchaVerified, setCaptchaVerified }) => {
  const [captchaModal, setCaptchaModal] = useState(false)

  function handleCaptchaCheck (e) {
    e.preventDefault()
    if (!captchaVerified) {
      setCaptchaModal(true)
    } else {
      setCaptchaModal(false)
    }
  }
  return (
    <div className='captcha-check'>
      {captchaVerified
        ? <div className='checkbox-container'><img className='checkbox center-vert-horz' src={check}/></div>
        : <div className='checkbox-container'>
        <input id='check-box' className='checkbox center-vert-horz' type="checkbox" onClick={(e) => {
          handleCaptchaCheck(e)
        }}/>
            </div>}
    <label className='checkbox-text'> {'I am human'}</label>
    <img className='captcha-icon' src={captcha_icon}/>
    {captchaModal && !captchaVerified ? <WaifuCaptcha setCaptchaModal={setCaptchaModal} captchaModal={captchaModal}setCaptchaVerified={setCaptchaVerified}/> : null}
    </div>
  )
}

export default Captcha
