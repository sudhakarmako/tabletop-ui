import ReactDOM from "react-dom";
import "./Modal.scss";
const ModalEl = document.getElementById("modal-portal") as HTMLElement;

type ModalType = {
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

const Modal = ({ open, onClose, children }: ModalType) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          <i className="bi bi-x-lg"></i>
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </>,
    ModalEl
  );
};

export default Modal;
