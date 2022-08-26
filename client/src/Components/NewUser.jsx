import React, { useState } from 'react'
import fairy from '../assets/photos/fairy.jpeg'
import axios from 'axios'
import Captcha from './Captcha.jsx'
import captcha_icon from '../assets/icons/captcha.svg'

const NewUser = ({ setPage, registered, setLogin, setHumanHeight }) => {
  const [view, setView] = useState('new-user')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [height, setHeight] = useState(0)
  const [captchaVerified, setCaptchaVerified] = useState(false)
  const [captchaModal, setCaptchaModal] = useState(false)
  const toggleView = () => {
    setEmail('')
    setPassword('')
    setUsername('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setHeight(0)
    view === 'new-user' ? setView('login') : setView('new-user')
  }

  const checkValid = () => {
    let usernameTaken = false
    let emailTaken = false
    if (username.length < 6) {
      alert('username must be at least 6 characters long')
      return false
    }
    if (firstName.length < 1) {
      alert('first name is required')
      return false
    }
    if (lastName.length < 1) {
      alert('last name is required')
      return false
    }
    if (password.length < 7) {
      alert('password must be more than 7 characters')
      return false
    }
    if (email.length < 1) {
      alert('email field is empty, input valid email')
      return false
    }
    if (height < 60 || height > 275) {
      alert('height must be valid')
      return false
    }
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
    if (!regex.test(email)) {
      alert('email is not valid')
      return false
    }
    axios.get('/username', { params: { username } }).then(({ data }) => {
      if (data) {
        usernameTaken = true
      }
    }).catch((err) => {
      console.log(err)
    })
    if (usernameTaken) {
      alert('username is already taken')
      return false
    }

    axios.get('/email', { params: { email } }).then(({ data }) => {
      if (data) {
        emailTaken = true
      }
    }).catch((err) => {
      console.log(err)
    })

    if (emailTaken) {
      alert('email is already taken')
      return false
    } else {
      return true
    }
  }
  const signUp = (e) => {
    e.preventDefault()
    if (checkValid()) {
      const user = {
        email,
        username,
        firstName,
        lastName,
        password,
        height: Number(height)
      }
      axios.post('/newuser', user).then((data) => {
        console.log('made new user')
        setLogin(username)
        setHumanHeight(height)
        setPage('scanner')
      }).catch((err) => {
        console.log(err)
        alert('Error signing up')
      })
    }
  }

  function login (e) {
    e.preventDefault()
    if (captchaVerified) {
      const params = { params: { username, password } }
      axios.get('/login', params).then(({ data }) => {
        if (data) {
          setLogin(username)
          setPage('dashboard')
        } else {
          alert('incorrect username or password')
        }
      }).catch((err) => {
        console.log(err)
      })
    } else {
      alert('Waifu Captcha needs to be verified')
    }
  }

  return (
    <div className='new-user-container page-transition'>
      <div className='new-user-form center-vert'>
      {view === 'new-user'
        ? (<>
            <div className="login-page center-vert-horz">
  <div className="form">
    <form className="login-form">
      <input autoComplete="on" name="username" onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username"/>
      <input autoComplete="on" name="password" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"/>
      <Captcha captchaVerified={captchaVerified} setCaptchaVerified={setCaptchaVerified}/>
      <button onClick={(e) => login(e)}>login</button>
      <p className="message">Not registered? <a className='hover' onClick={toggleView}>Create an account</a></p>
    </form>
  </div>
</div>
          </>)
        : (<>
            <div className='login-page center-vert-horz'>
            <div className='form'>
            <form className="login-form">
            <input autoComplete="on" name="username" onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" />
            <input autoComplete="on" name="password" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"/>
            <input autoComplete="on" name="firstName" onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="first name"/>
            <input autoComplete="on" name="lastName" onChange={(e) => setLastName(e.target.value)} type="text" placeholder="last name"/>
            <input autoComplete="on" name="email" onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email address"/>
            <input autoComplete="on" name="height" onChange={(e) => setHeight(e.target.value)} type="number" placeholder="height in cm"/>
            <button onClick={(e) => signUp(e)}>create</button>
            <p className="message">Already registered? <a className='hover' onClick={toggleView}>Sign In</a></p>
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
