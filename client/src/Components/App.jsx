import React, { useEffect, useState, useRef } from 'react'
import Scanner from './Scanner.jsx'
import NewUser from './NewUser.jsx'
import Dashboard from './Dashboard.jsx'
function App () {
  const [page, setPage] = useState('intro')
  const humanHeight = useRef(null)
  const login = useRef(null)
  const homepage = () => {
    if (login.current !== null) {
      setPage('dashboard')
    } else {
      setPage('new-user')
    }
  }
  const renderPage = () => {
    if (page === 'new-user') {
      return <NewUser registered={registered} setPage={setPage} setLogin={setLogin} setHumanHeight={setHumanHeight} />
    } else if (page === 'scanner') {
      return <Scanner humanHeight={humanHeight.current} username={login.current} setPage={setPage}/>
    } else if (page === 'dashboard') {
      return <Dashboard setPage={setPage} setLogin={setLogin} username={login.current} setHumanHeight={setHumanHeight}/>
    }
    return (
      <div className='intro center-vert-horz'>
        <div className='intro-text'>Fairy Measure</div>
        <div className='intro-text'>The future of online body tracking</div>
      </div>
    )
  }

  const setLogin = (username) => {
    login.current = username
  }

  const setHumanHeight = (height) => {
    humanHeight.current = height
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setPage('new-user')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const registered = (height) => {
    humanHeight.current = height
    setPage('scanner')
  }
  return (
    <div className="app">
      {renderPage()}
          {page !== 'dashboard'
            ? (<div className='app-name-container homepage-buttons'>
          <span onClick={(e) => homepage()}className='app-name'>Fairy Measure</span>
        </div>)
            : null}
    </div>
  )
}

export default App