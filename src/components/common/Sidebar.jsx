import React from 'react'

function Sidebar() {
    
  return (
     <div className="navigation ">
  <ul>
    <li>
        <img src="./assets/imgs/icon-1.png" alt="" style={{backgroundColor:"white",borderRadius:30 ,marginTop:10}}/>
    </li>
    <li>
      <a href="#">
        <span className="icon">
          <ion-icon name="home-outline" />
        </span>
        <span className="title">Dashboard</span>
      </a>
    </li>
    <li>
      <a href="#">
        <span className="icon">
          <ion-icon name="people-outline" />
        </span>
        <span className="title">Customers</span>
      </a>
    </li>
    <li>
      <a href="#">
        <span className="icon">
          <ion-icon name="chatbubble-outline" />
        </span>
        <span className="title">Messages</span>
      </a>
    </li>
    <li>
      <a href="#">
        <span className="icon">
          <ion-icon name="help-outline" />
        </span>
        <span className="title">Help</span>
      </a>
    </li>
    <li>
      <a href="#">
        <span className="icon">
          <ion-icon name="settings-outline" />
        </span>
        <span className="title">Settings</span>
      </a>
    </li>
    <li>
      <a href="#">
        <span className="icon">
          <ion-icon name="lock-closed-outline" />
        </span>
        <span className="title">Password</span>
      </a>
    </li>
    <li>
      <a href="#">
        <span className="icon">
          <ion-icon name="log-out-outline" />
        </span>
        <span className="title">Sign Out</span>
      </a>
    </li>
  </ul>
</div>

  )
}

export default Sidebar
