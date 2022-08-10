import React, { useState } from 'react'
import fairy from '../assets/photos/fairy.jpeg'
const NewUser = ({setPage, registered }) => {
  const [view, setView] = useState('new-user')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [height, setHeight] = useState('')

  const toggleView = () => {
    setEmail('')
    setPassword('')
    view === 'new-user' ? setView('login') : setView('new-user')
  }

  const onButtonClick = () => {
    // send backend api request to create new user
    // router to navigate to next step/page
    registered(height);
  }

  const signUp = () => {
    setPage('dashboard');
  }

  const login = () => {
    setPage('dashboard');
  }
  return (
    <div className='new-user-container page-transition'>
      <div className='new-user-form center-vert'>
      {view === 'new-user'
        ? (<>
            {/* <div className='new-user-form-outline'>
              <label>Email:</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label>Password:</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
              <label>What is your height in cm?</label>
              <input />
            </div>
            <button onClick={onButtonClick}>Register</button>
            <hr />
            <span>Already have an account?</span><button onClick={toggleView}>Login</button> */}
            <div className="login-page center-vert-horz">
  <div className="form">
    <form className="login-form">
      <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="username"/>
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"/>
      <button onClick={(e) => onButtonClick()}>login</button>
      <p className="message">Not registered? <a href="#" onClick={toggleView}>Create an account</a></p>
    </form>
  </div>
</div>
          </>)
        : (<>
            {/* <div>
              <label>Email:</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label>Password:</label>
              <input value={password} onChange={(e) => checkPassword(e.target.value)} />
            </div>
            <button >Login</button>
            <hr />
            <span>Need to create an account?</span><button onClick={toggleView}>Register</button> */}
            <div className='login-page center-vert-horz'>
            <div className='form'>
            <form className="login-form">
<input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username"/>
<input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="first name"/>
<input onChange={(e) => setLastName(e.target.value)} type="text" placeholder="last name"/>
<input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"/>
<input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email address"/>
<input onChange={(e) => setHeight(e.target.value)} type="number" placeholder="height in cm"/>
<button>create</button>
<p className="message">Already registered? <a href="#" onClick={toggleView}>Sign In</a></p>
</form>
            </div>
            </div>
          </>)}
    </div>
    <img className='fairy' src={fairy}/>
      </div>
  )
}

export default NewUser
