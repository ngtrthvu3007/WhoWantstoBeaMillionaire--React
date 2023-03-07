import React from "react";
function SideBar(props) {
  return (
    <div className="row justify-content-center ">
      <div className=" top-box col-md-8 mt-4 text-white border border-warning rounded d-flex">
        <div className="mt-2 list-icon col-3 d-flex flex-wrap">
          <span className="icon-help"></span>
          <span className="icon-help"></span>
          <span className="icon-help"></span>
        </div>
        <div className=" col-8 list-item">
          <div className="row mt-2  d-flex flex-wrap">
            <span className=" col item ">1. 200 </span>
            <span className=" col item">2. 400 </span>
            <span className="col item">3. 600 </span>
            <span className=" col item">4. 1,000 </span>
            <span className=" col item text-warning">5. 2,000 </span>
          </div>
          <div className=" mt-1 row d-flex flex-wrap">
            <span className="col  item">6. 3,000 </span>
            <span className="col  item">7. 6,000 </span>
            <span className="col   item">8. 10,000 </span>
            <span className="col  item">9. 14,000 </span>
            <span className="col item text-warning">10. 22,000 </span>
          </div>
          <div className=" mt-1 row d-flex flex-wrap">
            <span className=" col item">11. 30,000 </span>
            <span className=" col item">12. 40,000 </span>
            <span className=" col item">13. 60,000 </span>
            <span className=" col item">14. 85,000 </span>
            <span className=" col item text-warning">15. 150,000 </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
