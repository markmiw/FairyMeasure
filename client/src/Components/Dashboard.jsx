import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

function Dashboard ({ username, setPage, setHumanHeight, setLogin }) {
  const [userData, setUserData] = useState({})
  const firstName = useRef('')
  useEffect(() => {
    axios.get('/userinfo', { params: { username } }).then(({ data }) => {
      setHumanHeight(data.height)
      firstName.current = data.firstName
      axios.get('/measurements', { params: { username } }).then(({ data }) => {
        setUserData(data)
        console.log(data)
      }).catch((err) => {
        console.log(err)
        alert('Error getting user information')
      })
    })
    // axios.get('/measurements', { username }, (req, res) => {
    //   debugger;
    // })
  }, [])
  const logout = (e) => {
    e.preventDefault()
    setHumanHeight(null)
    setLogin('')
    setPage('new-user')
  }

  const createTable = () => {
    if (Object.keys(userData).length !== 0) {
      return (
<div>
      <nav className='nav'>
      <div className='nav-left'>
<h1 className="h2 headers">Dashboard</h1>
<p className='welcome headers'>Welcome back {firstName.current}</p>
</div>
        <div className='nav-right'>
        <button onClick={(e) => { logout(e) }}>Logout</button>
<button onClick={(e) => { setPage('scanner') }}>Scan</button>
        </div>
</nav>
    <table className="table">
    <caption>Face Measurements</caption>
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Eyes</th>
      <th scope="col">Left Face</th>
      <th scope="col">Right Face</th>
      <th scope="col">Face</th>
    </tr>
  </thead>
  <tbody>
  {userData.map((element, i) => {
    return (
      <tr key={i}>
        <td>{i}</td>
        <td>{element.face.eyes.width.toFixed(2)}</td>
        <td>{element.face.left_face.width.toFixed(2)} / {element.face.left_face.height.toFixed(2)}</td>
        <td>{element.face.right_face.width.toFixed(2)} / {element.face.right_face.height.toFixed(2)}</td>
        <td>{element.face.width.toFixed(2)} / {element.face.height.toFixed(2)}</td>
      </tr>
    )
  })}
  </tbody>
</table>

<table className="table">
    <caption>Torso Measurements</caption>
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Shoulder</th>
      <th scope="col">Torso Back</th>
      <th scope="col">Torso Front</th>
    </tr>
  </thead>
  <tbody>
  {userData.map((element, i) => {
    return (
      <tr key={i}>
        <td>{i}</td>
        <td>{element.torso.shoulder.width.toFixed(2)}</td>
        <td>{element.torso.torso_back.width.toFixed(2)} / {element.torso.torso_back.height.toFixed(2)}</td>
        <td>{element.torso.torso_front.width.toFixed(2)} / {element.torso.torso_front.height.toFixed(2)}</td>
      </tr>
    )
  })}
  </tbody>
</table>

<table className="table">
    <caption>Left Arm Measurements</caption>
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Hand</th>
      <th scope="col">Lower Arm Back</th>
      <th scope="col">Lower Arm Front</th>
      <th scope="col">Upper Arm Back</th>
      <th scope="col">Upper Arm Front</th>
    </tr>
  </thead>
  <tbody>
  {userData.map((element, i) => {
    return (
      <tr key={i}>
        <td>{i}</td>
        <td>{element.arms.left_hand.width.toFixed(2)} / {element.arms.left_hand.height.toFixed(2)}</td>
        <td>{element.arms.left_lower_arm_back.width.toFixed(2)} / {element.arms.left_lower_arm_back.height.toFixed(2)}</td>
        <td>{element.arms.left_lower_arm_front.width.toFixed(2)} / {element.arms.left_lower_arm_front.height.toFixed(2)}</td>
        <td>{element.arms.left_upper_arm_back.width.toFixed(2)} / {element.arms.left_upper_arm_back.height.toFixed(2)}</td>
        <td>{element.arms.left_upper_arm_front.width.toFixed(2)} / {element.arms.left_upper_arm_front.height.toFixed(2)}</td>
      </tr>
    )
  })}
  </tbody>
</table>

<table className="table">
    <caption>Right Arm Measurements</caption>
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Hand</th>
      <th scope="col">Lower Arm Back</th>
      <th scope="col">Lower Arm Front</th>
      <th scope="col">Upper Arm Back</th>
      <th scope="col">Upper Arm Front</th>
    </tr>
  </thead>
  <tbody>
  {userData.map((element, i) => {
    return (
      <tr key={i}>
        <td>{i}</td>
        <td>{element.arms.right_hand.width.toFixed(2)} / {element.arms.right_hand.height.toFixed(2)}</td>
        <td>{element.arms.right_lower_arm_back.width.toFixed(2)} / {element.arms.right_lower_arm_back.height.toFixed(2)}</td>
        <td>{element.arms.right_lower_arm_front.width.toFixed(2)} / {element.arms.right_lower_arm_front.height.toFixed(2)}</td>
        <td>{element.arms.right_upper_arm_back.width.toFixed(2)} / {element.arms.right_upper_arm_back.height.toFixed(2)}</td>
        <td>{element.arms.right_upper_arm_front.width.toFixed(2)} / {element.arms.left_upper_arm_front.height.toFixed(2)}</td>
      </tr>
    )
  })}
  </tbody>
</table>

<table className="table">
    <caption>Left Leg Measurements</caption>
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Foot</th>
      <th scope="col">Lower Leg Front</th>
      <th scope="col">Upper Leg Front</th>
    </tr>
  </thead>
  <tbody>
  {userData.map((element, i) => {
    return (
      <tr key={i}>
        <td>{i}</td>
        <td>{element.legs.left_foot.width.toFixed(2)} / {element.legs.left_foot.height.toFixed(2)}</td>
        <td>{element.legs.left_lower_leg_front.width.toFixed(2)} / {element.legs.left_lower_leg_front.height.toFixed(2)}</td>
        <td>{element.legs.left_upper_leg_front.width.toFixed(2)} / {element.legs.left_upper_leg_front.height.toFixed(2)}</td>
      </tr>
    )
  })}
  </tbody>
</table>

<table className="table">
    <caption>Right Leg Measurements</caption>
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Foot</th>
      <th scope="col">Lower Leg Front</th>
      <th scope="col">Upper Leg Front</th>
    </tr>
  </thead>
  <tbody>
  {userData.map((element, i) => {
    return (
      <tr key={i}>
        <td>{i}</td>
        <td>{element.legs.right_foot.width.toFixed(2)} / {element.legs.right_foot.height.toFixed(2)}</td>
        <td>{element.legs.right_lower_leg_front.width.toFixed(2)} / {element.legs.right_lower_leg_front.height.toFixed(2)}</td>
        <td>{element.legs.right_upper_leg_front.width.toFixed(2)} / {element.legs.right_upper_leg_front.height.toFixed(2)}</td>
      </tr>
    )
  })}
  </tbody>
</table>
</div>
      )
    }
  }
  return (
    <div className={'dashboard'}>
          {createTable()}
    </div>
  )
}

export default Dashboard
