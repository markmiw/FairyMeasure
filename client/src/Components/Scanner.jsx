import React, { useRef, useState } from 'react'
import * as tf from '@tensorflow/tfjs'
import * as bodyPix from '@tensorflow-models/body-pix'
import Webcam from 'react-webcam'
import { drawKeypoints, drawSkeleton } from './draw.jsx'
import '../assets/styles.css'
import FrontModal from './FrontModal.jsx'
// import SideModal from './SideModal.jsx'
import CompleteFrontModal from './CompleteFrontModal.jsx'
// import CompleteSideModal from './CompleteSideModal.jsx'
import { calculate } from '../helpers/analysis.js'
import axios from 'axios'

function Scanner ({ humanHeight, username, setPage }) {
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)
  const measurements = useRef({
    front: {}
    // side: {}
  })
  const [stage, setStage] = useState('initialize')

  const runFrontBodysegment = async () => {
    const net = await bodyPix.load({
      architecture: 'ResNet50',
      outputStride: 16,
      quantBytes: 4
    })

    const interval = setInterval(() => {
      if (stage !== 'front-complete') {
        detect(net)
      } else {
        clearInterval(interval)
      }
    }, 100)
  }

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video
      const videoWidth = webcamRef.current.video.videoWidth
      const videoHeight = webcamRef.current.video.videoHeight

      webcamRef.current.video.width = videoWidth
      webcamRef.current.video.height = videoHeight

      const person = await net.segmentPersonParts(video, {
        flipHorizontal: false,
        internalResolution: 'medium',
        segmentationThreshold: 0.7
      })
      if (person.allPoses[0].score > 0.974) {
        measurements.current.front = person
        measurements.current.front.vWidth = videoWidth
        measurements.current.front.vHeight = videoHeight
        setStage('front-complete')
      }
      drawCanvas(person.allPoses[0], video, videoWidth, videoHeight, canvasRef)
    }
  }

  const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
    const ctx = canvas.current.getContext('2d')
    canvas.current.width = videoWidth
    canvas.current.height = videoHeight

    drawKeypoints(pose.keypoints, 0.6, ctx)
    drawSkeleton(pose.keypoints, 0.7, ctx)
  }

  function frontReady () {
    document.getElementsByClassName('webcam-container')[0].classList.remove('hidden')
    setTimeout(runFrontBodysegment, 3000)
    setStage('front-scanning')
  }

  function frontComplete () {
    let obj = calculate(measurements.current.front, humanHeight)
    obj.username = username
    obj.date = new Date()
    axios.post('/measurements', obj).then((data) => {
      setPage('dashboard')
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="scanner page-transition">
      {stage === 'initialize' ? <FrontModal frontReady={frontReady}/> : null}
      {stage === 'front-complete' ? <CompleteFrontModal frontComplete={frontComplete}/> : null}
      {stage !== 'front-complete'
        ? (<div className='webcam-container hidden'>
        <Webcam
          ref={webcamRef}
          className='cam center-vert-horz'
        />
        <canvas
        ref={canvasRef}
          className='cam center-vert-horz'
        />
      </div>)
        : null}
    </div>
  )
}

export default Scanner
