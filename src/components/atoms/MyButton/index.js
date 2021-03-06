import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const MyButtonStyled = styled.button`
  background-color: rgb(17, 82, 147);
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
  color: #fff;
  margin: 15px;
  padding: 6px 10px;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  ${({ float }) => float && css`
    position: fixed;
    ${float}: 0;
    bottom: 0;
  `}
`

function MyButton (props) {
  const { title, onClick, float } = props

  return (
    <MyButtonStyled
      onClick={onClick}
      float={float}
    >
      {title}
    </MyButtonStyled>
  )
}

MyButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  float: PropTypes.string
}

MyButton.defaultProps = {
  float: ''
}

export default MyButton
