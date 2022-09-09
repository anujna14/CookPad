import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="error-modal-header">
        <h2>{props.title}</h2>
      </div>
      <div className="error-modal-content">
        <p>{props.message}</p>
      </div>
      <div className="modal-actions">
        <button type="button" onClick={props.onConfirm}>
          Okay
        </button>
      </div>
    </div>
  );
};

const Modal = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById("backdrop-modal"))}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />,
        document.getElementById("overlay-modal")
      )}
    </React.Fragment>
  );
};

export default Modal;
