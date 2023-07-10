import React from "react";
import Backdrop2 from "./Backdrop";
import styled from "styled-components";
import { createPortal } from "react-dom";

const Form = (props) => {
  return (
    <>
      <Backdrop2 blockModal={props.blockModal} />
      {createPortal(
        <ModalStyle>{props.children}</ModalStyle>,
        document.getElementById("modal2")
      )}
    </>
  );
};

export default Form;
const ModalStyle = styled.div`
  display: inline-block;
  border: 1px solid;
  padding: 10px 50px;
  background-color: #c61d14;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
`;
