import React from 'react'
import Topnav from '../components/common/Topnav'
import Sidebar from '../components/common/Sidebar'
import Dash from '../main/Dash'


function Dashboard() {
  return (
    <div className='container'>
      <Sidebar/>
      <div className='main'>
     <Topnav/>
     <Dash/>


      </div>
        </div>
  )
}

export default Dashboard
