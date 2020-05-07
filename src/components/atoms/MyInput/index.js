import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MyInputStyled = styled.input`
  border: 1px solid #000;
`

function MyInput (props) {
  const { name, type } = props

  return (
    <MyInputStyled name={name} type={type} />
  )
}

MyInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default MyInput
