import React from "react";
import Backdrop from "./Backdrop";
import styled from "styled-components";
import { createPortal } from "react-dom";

const Modal = (props) => {
  return (
    <>
      <Backdrop blockModal={props.blockModal} />
      {createPortal(
        <ModalStyle>{props.children}</ModalStyle>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;
const ModalStyle = styled.div`
  display: inline-block;
  border: 1px solid;
  padding: 10px 50px;
  background-color: #10e02c;
  border-radius: 10px;
  position: absolute;
  top: 30%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
`;
