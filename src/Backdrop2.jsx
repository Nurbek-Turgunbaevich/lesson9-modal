import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

const Backdrop2 = (props) => {
  return (
    <div>
          {createPortal(
        <BackdropStyle2 onClick={props.blockModal}></BackdropStyle2>,
        document.getElementById("backdrop2")
      )}
    </div>
  )
}

export default Backdrop2

const BackdropStyle2 = styled.div`
 background: rgba(17, 17, 17, 0.85);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`