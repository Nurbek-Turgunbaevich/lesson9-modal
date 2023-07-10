import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Backdrop = (props) => {
  return (
    <div>
      {createPortal(
        <BackdropStyle onClick={props.blockModal}></BackdropStyle>,
        document.getElementById("backdrop")
      )}
 
    </div>
  );
};

export default Backdrop;

const BackdropStyle = styled.div`
  background: rgba(17, 17, 17, 0.85);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;
