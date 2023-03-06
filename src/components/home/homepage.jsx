import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import ModalHome from "../modal/Modal.jsx";
function HomePage(props) {
  let [show, setShow] = useState(false);
  let [contentModal, setContentModal] = useState("");
  const openModal = (type) => {
    switch (type) {
      case "rule":
        setContentModal("rule");
        break;
      case "playnow":
        setContentModal("playnow");
        break;
      case "history":
        setContentModal("history");
        break;
      case "ranking":
        setContentModal("ranking");
        break;
      default:
        return false;
    }

    setShow(true);
  };

  const submitName = (e) => {
    alert(123);
    e.preventDefault();
  };
  const closeModal = () => setShow(false);
  return (
    <div className="bg-image">
      <div className="position-absolute start-50 translate-middle">
        <div className="row">
          <div className="col-12 text-center mt-5 logo">
            <img src={Logo} alt="logo" className="image" />
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-12 text-center">
            <ul>
              <li className="mt-2">
                <div className="custom-bg text-white fs-4" onClick={() => openModal("playnow")}>
                  Chơi Ngay
                </div>
              </li>
              <li className="mt-2">
                <div className="custom-bg text-white fs-4" onClick={() => openModal("rule")}>
                  Thể Lệ
                </div>
              </li>
              <li className="mt-2">
                <div className="custom-bg text-white fs-4" onClick={() => openModal("history")}>
                  Lịch Sử
                </div>
              </li>
              <li className="mt-2">
                <div className="custom-bg text-white fs-4" onClick={() => openModal("ranking")}>
                  Bảng Xếp Hạng
                </div>
              </li>
            </ul>
          </div>
        </div>
        <ModalHome show={show} closeModal={closeModal} contentModal={contentModal} submitName={submitName} />
      </div>
    </div>
  );
}
export default HomePage;
