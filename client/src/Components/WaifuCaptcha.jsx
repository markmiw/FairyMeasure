import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import CaptchaImage from './CaptchaImage.jsx'

function shuffle (array) {
  let currentIndex = array.length; let randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]]
  }

  return array
}

function WaifuCaptcha ({ setCaptchaVerified, setCaptchaModal, captchaModal }) {
  const [imageURLs, setImageURLs] = useState([])
  const [selectedPics, setSelectedPics] = useState([false, false, false, false, false, false, false, false, false])
  const waifuPicCount = useRef(0)
  const selectedWaifuCount = useRef(0)
  const attemptedCaptcha = useRef(false)
  useEffect(() => {
    getPhotos()
  }, [])
  const [selectedCount, setSelectedCount] = useState(0)
  function getPhotos () {
    const waifuPicNum = Math.floor(Math.random() * 8) + 1
    waifuPicCount.current = waifuPicNum
    const otherPicNum = 9 - waifuPicNum
    const waifuReqs = []
    let urls = []
    for (let i = 0; i < waifuPicNum; i++) {
      waifuReqs.push(axios.get('https://api.waifu.im/random'))
    }
    Promise.all(waifuReqs).then((data) => {
      for (let i = 0; i < data.length; i++) {
        urls.push([data[i].data.images[0].url, true, false])
      }

      for (let i = 0; i < otherPicNum; i++) {
        urls.push(['https://picsum.photos/200/300?random=' + i * Math.floor(Math.random() * 1000), false, false])
      }
      urls = shuffle(urls)
      setImageURLs(urls)
    }).catch((err) => {
      console.log(err)
    })
  }

  function checkCorrectPhotos (selectedPics, imageURLs) {
    for (let i = 0; i < 9; i++) {
      if (selectedPics[i] !== imageURLs[i][1]) {
        return false
      }
    }
    return true
  }
  function handleSubmitCaptcha (e, selectedPics, imageURLs) {
    e.preventDefault()
    if (e.target.textContent === 'SKIP') {
      setSelectedPics([false, false, false, false, false, false, false, false, false])
      getPhotos()
    } else {
      if (checkCorrectPhotos(selectedPics, imageURLs)) {
        setCaptchaVerified(true)
      } else {
        attemptedCaptcha.current = true
        setSelectedPics([false, false, false, false, false, false, false, false, false])
        getPhotos()
      }
    }
  }
  if (imageURLs.length > 0) {
    return (
    <div className='captcha-modal' style={{
      position: 'absolute',
      left: '-160px',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.8)'
    }} onClick={(e) => {
      setCaptchaModal(!captchaModal)
    }}>
      <div onClick={e => e.stopPropagation()} style={{ width: 'fit-content', padding: '10px', border: '1px solid rgb(230, 230, 230)' }}>
        <div style={{ backgroundColor: 'rgb(92, 142, 220)', padding: '10px' }}>
          <h5 style={{ color: 'white', margin: '5px 0' }}>Select all squares with</h5>
          <h1 style={{ color: 'white', margin: '10px 0' }}>waifus</h1>
          <h5 style={{ color: 'white', margin: '5px 0' }}>If there are none, click skip</h5>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'max-content max-content max-content',
          rowGap: '4px',
          columnGap: '4px',
          padding: '4px 0'
        }}>
          {
            imageURLs.map((url, index) => (
              <CaptchaImage url={url} selectedCount={selectedCount} setSelectedCount={setSelectedCount} selectedWaifuCount={waifuPicCount.current} selectedPics={selectedPics} setSelectedPics={setSelectedPics} index={index} key={index} />
            ))
          }
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '5px'
        }}>
          {attemptedCaptcha.current ? <span className='try-again'>please try again</span> : null}
          <button style={{
            height: '35px',
            width: '70px',
            border: '0',
            color: 'white',
            backgroundColor: 'rgb(92, 142, 220)',
            cursor: 'pointer',
            justifySelf: 'end',
            padding: '0'
          }}
          onClick={(e) => {
            handleSubmitCaptcha(e, selectedPics, imageURLs)
          }}
          >
            {selectedCount > 0 ? 'GO' : 'SKIP'}
          </button>
        </div>
      </div>
    </div>
    )
  }
}

export default WaifuCaptcha
