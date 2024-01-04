import React, { useState } from 'react'

function Topnav() {
 
  return (
    <div>
        <div className="topbar">
  <div className="toggle">
    <ion-icon name="menu-outline"/>
  </div>
  <div className="search">
    <label>
      <input type="text" placeholder="Search here" />
      <ion-icon name="search-outline" />
    </label>
  </div>
  <div className="user">
    <img src="./assets/imgs/customer01.jpg" alt />
  </div>
</div>



    </div>
  )
}

export default Topnav
