import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MyButtonStyled = styled.button`
  background: #000;
  color: #FFF;
  border: none;
`

function MyButton (props) {
  const { title } = props

  return (
    <MyButtonStyled>
      {title}
    </MyButtonStyled>
  )
}

MyButton.propTypes = {
  title: PropTypes.string.isRequired
}

export default MyButton
