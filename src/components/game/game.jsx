import React, { useState } from "react";
import SideBar from "../SideBar/sidebar.js";
import MainSide from "../mainSide/mainside.js";
function GamePage(props) {
  return (
    <div className="bg-image">
      <div class="container">
        <SideBar />
        <MainSide />
      </div>
    </div>
  );
}
export default GamePage;
