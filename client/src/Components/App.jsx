import React, { useEffect, useState, useRef, Suspense } from 'react'
import Scanner from './Scanner.jsx'
import NewUser from './NewUser.jsx'
import fairy from '../assets/photos/fairy.jpeg'
function App () {
  const videoH = window.screen.availHeight
  const videoW = window.screen.availWidth
  const [initialize, setInitialize] = useState(false)
  const [page, setPage] = useState('intro')
  const humanHeight = useRef(null)
  const [login, setLogin] = useState(false);
  const homepage = () => {
    if (login) {
      setPage('dashboard')
    } else {
      setPage('new-user')
    }
  }
  const renderPage = () => {
    if (page === 'new-user') {
      return <NewUser registered={registered} setPage={setPage} />
    } else if (page === 'scanner') {
      // return component here and pass setPage
      // return <h1>Scanner Page</h1>
      return <Scanner humanHeight={humanHeight.current}/>
    } else if (page === 'dashboard') {
      // return dashboard
    }
    return (
      <div className='intro center-vert-horz'>
        <div className='intro-text'>Fairy Measure</div>
        <div className='intro-text'>The future of online body tracking</div>
      </div>
    )
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setPage('new-user')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const registered = (height) => {
    humanHeight.current = height;
    setPage('scanner');
  }
  return (
    <div className="app">
      {renderPage()}
        {/* {page==='intro'
          ? (<div className='intro center-vert-horz'>
              <div className='intro-text'>MeasureX</div>
              <div className='intro-text'>The future of online body tracking</div>
            </div>)
          : (<>
            <div className='login-container homepage-buttons'>
              <span className='homepage-text'>Login</span>
              <NewUser/>
            </div>
          </>)} */}
        <div className='app-name-container homepage-buttons'>
          <span onClick={(e) => homepage()}className='app-name'>Fairy Measure</span>
        </div>
    </div>
  )
}

export default App

// {initialized.current ? (<Scanner videoH={videoH} videoW={videoW} humanHeight={178} />) : null}