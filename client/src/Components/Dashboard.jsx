import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
function Dashboard ({ username, setPage, setHumanHeight, setLogin }) {
  const [userData, setUserData] = useState({})
  const firstName = useRef('')
  useEffect(() => {
    axios.get('/userinfo', { params: { username } }).then(({ data }) => {
      setHumanHeight(data.height)
      firstName.current = data.firstName.toLowerCase()
      const cap = firstName.current[0].toUpperCase()
      firstName.current = cap + firstName.current.substring(1, firstName.current.length)

      axios.get('/measurements', { params: { username } }).then(({ data }) => {
        setUserData(data)
      }).catch((err) => {
        console.log(err)
        alert('Error getting user information')
      })
    })
  }, [])
  const logout = (e) => {
    e.preventDefault()
    setHumanHeight(null)
    setLogin('')
    setPage('new-user')
  }

  const createTable = () => {
    return (
<div className='dashboard-page'>
      {/* <nav className='nav'>
<h1 className="h2 headers">Dashboard</h1>
<p className='welcome headers'>Welcome back {firstName.current}!</p>
  <p className='welcome headers' onClick={(e) => { setPage('scanner') }}>Scan</p>
<p className='welcome headers' onClick={(e) => { logout(e) }}>Logout</p>
</nav> */}

<nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse">
              <div className="position-sticky">
                <div className="list-group list-group-flush mx-3 mt-4">
                  <a onClick={(e) => { setPage('dashboard') }} className="hover list-group-item list-group-item-action py-2 ripple" aria-current="true">
                    <i></i><span>Dashboard</span>
                  </a>
                  <a onClick={(e) => { setPage('scanner') }} className="hover list-group-item list-group-item-action py-2 ripple"><i
                  ></i><span>Scan</span></a>
                  <a onClick={(e) => { logout(e) }} className="hover list-group-item list-group-item-action py-2 ripple"><i
                  ></i><span>Logout</span></a>
                </div>
              </div>
            </nav>
            {Object.keys(userData).length !== 0
              ? <div className='table-container'>
              <div className='card-temp'>
              <p className='table-title'>Face Measurements</p>
              <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">{'Eyes [cm]'}</th>
                  <th scope="col">{'Left Face [cm]'}</th>
                  <th scope="col">{'Right Face [cm]'}</th>
                  <th scope="col">{'Face [cm]'}</th>
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
              </div>
              <div className='card-temp'>
              <p className='table-title'>Torso Measurements</p>
              <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">{'Shoulder [cm]'}</th>
                  <th scope="col">{'Torso Back [cm]'}</th>
                  <th scope="col">{'Torso Front [cm]'}</th>
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
              </div>

            <div className='card-temp'>
            <p className='table-title'>Left Arm Measurements</p>
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">{'Hand [cm]'}</th>
                  <th scope="col">{'Lower Arm Back [cm]'}</th>
                  <th scope="col">{'Lower Arm Front [cm]'}</th>
                  <th scope="col">{'Upper Arm Back [cm]'}</th>
                  <th scope="col">{'Upper Arm Front [cm]'}</th>
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
            </div>

            <div className='card-temp'>
            <p className='table-title'>Right Arm Measurements</p>
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">{'Hand [cm]'}</th>
                  <th scope="col">{'Lower Arm Back [cm]'}</th>
                  <th scope="col">{'Lower Arm Front [cm]'}</th>
                  <th scope="col">{'Upper Arm Back [cm]'}</th>
                  <th scope="col">{'Upper Arm Front [cm]'}</th>
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
            </div>

            <div className='card-temp'>
              <p className='table-title'>Left Leg Measurements</p>
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">{'Foot [cm]'}</th>
                  <th scope="col">{'Lower Leg Front [cm]'}</th>
                  <th scope="col">{'Upper Leg Front [cm]'}</th>
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
            </div>

            <div className='card-temp'>
            <p className='table-title'>Right Leg Measurements</p>
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">{'Foot [cm]'}</th>
                  <th scope="col">{'Lower Leg Front [cm]'}</th>
                  <th scope="col">{'Upper Leg Front [cm]'}</th>
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
            </div>
              : null}
</div>
    )
  }
  return (
    <div className={'dashboard page-transition'}>
          {createTable()}
    </div>
  )
}

export default Dashboard
