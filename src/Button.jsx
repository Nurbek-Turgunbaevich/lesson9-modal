import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  return (
    <div>
        <BtnStyle onClick={props.onClick} >{props.children}</BtnStyle>
        </div>
  )
}

export default Button

const BtnStyle = styled.button`
padding: 10px 20px;
`