import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
function ModalHome({ show, closeModal, contentModal, submitName }) {
  let ContentObject = {
    header: "",
    body: "",
    footer: "",
  };
  switch (contentModal) {
    case "rule":
      ContentObject = {
        header: "Thể Lệ Trò Chơi",
        body: (
          <div>
            <p>1. Có 3 mốc quan trọng là 5, 10 và 15</p>
            <p>2. Bạn sẽ phải vượt qua 15 câu hỏi từ chương trình</p>
            <p>3. Bạn có 3 sự trợ giúp là 50/50, thay đổi câu hỏi và nhân 3 thời gian</p>
            Chúc Bạn Thành Công!
          </div>
        ),
      };
      break;
    case "playnow":
      ContentObject = {
        header: "Nhập Tên Người Chơi",
        body: (
          <>
            <div className="row d-flex align-items-center">
              <div className="col">
                <input type="text" placeholder="Nhập tên của bạn" className="modal-input" />
                <Link to="/game">
                  <button
                    className="btn bg-warning mt-4 btn-playnow"
                    //onClick={(e) => submitName(e)}
                  >
                    Chơi Ngay
                  </button>
                </Link>
              </div>
            </div>
          </>
        ),
      };

      break;
    case "history":
      ContentObject = {
        header: "Lịch Sử Chơi",
        body: (
          <div className="row">
            <div className="col">Tổng Điểm</div>
            <div className="col">Mốc Thưởng</div>
          </div>
        ),
      };

      break;
    case "ranking":
      ContentObject = {
        header: "Bảng Xếp Hạng",
        body: (
          <div className="row">
            <div className="col">Tên người chơi</div>
            <div className="col">Điểm số</div>
            <div className="col">Ngày chơi</div>
          </div>
        ),
      };
      break;
    default:
      return;
  }

  return (
    <>
      <Modal show={show} onHide={closeModal} className="custom-modal" centered>
        <Modal.Header closeButton className="text-center">
          <Modal.Title>{ContentObject.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{ContentObject.body}</Modal.Body>
      </Modal>
    </>
  );
}
export default ModalHome;
