import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MyInputStyled = styled.input`
  font: inherit;
  color: #000;
  width: 100%;
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.23);
  height: 1.1876em;
  margin: 0;
  display: block;
  padding: 6px 0 7px;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  animation-name: mui-auto-fill-cancel;
  -webkit-tap-highlight-color: transparent;
  padding: 5px;
  border-radius: 5px;
  outline: none;
`

const MyInput = React.forwardRef((props, ref) => {
  const { name, type } = props

  return (
    <MyInputStyled
      ref={ref}
      name={name}
      type={type}
    />
  )
})

MyInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default MyInput
