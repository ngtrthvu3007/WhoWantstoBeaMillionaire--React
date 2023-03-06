import React, { useState } from "react";

function GamePage(props) {
  return (
    <div className="bg-image">
      <div className="position-absolute start-50 translate-middle">
        <div className="row">
          <div className="col-12 text-center mt-5 logo"></div>
        </div>
        <div className="row pt-5">
          <div className="col-12 text-center">
            <ul>
              <li className="mt-2"></li>
              <li className="mt-2"></li>
              <li className="mt-2"></li>
              <li className="mt-2"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GamePage;
