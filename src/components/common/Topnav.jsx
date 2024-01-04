import React, { useState } from "react";

function Topnav() {
  const handleToggleClick = () => {
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  };

  return (
    <div>
      <div className="topbar">
        <div className="toggle" onClick={handleToggleClick}>
          <ion-icon name="menu-outline" />
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
  );
}

export default Topnav;
