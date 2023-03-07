import React, { useState, useEffect } from "react";

function MainSide(props) {
  const [time, setTime] = useState(60);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          return prevTime;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="row justify-content-center">
      <div className="main-side col-md-8 mt-4 text-white  rounded d-inline-flex justify-content-center">
        <div className="row justify-content-center mt-2">
          <div className=" question-box d-flex  justify-content-center align-items-center ">
            Đội tuyển bóng đá quốc gia Đức vô địch thế giới bao nhiêu lần giới bao nhiêu lần
          </div>
          <div className="col d-flex justify-content-center mt-2">
            <div className="oclock-icon d-flex justify-content-center align-items-center ">
              <span className="coutdown-time">{time}</span>
            </div>
          </div>

          <div className="row d-flex justify-content-center align-items-center ">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-5 answer-box">A. 6 lan</div>
              <div className="col-5 answer-box">B. 6 lan </div>
            </div>
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-5 answer-box">C. 7 lan </div>
              <div className="col-5 answer-box">D. 8 lan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainSide;
