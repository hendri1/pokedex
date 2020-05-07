import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const MyLabelStyled = styled.label`
  color: #000;
  z-index: 1;
  pointer-events: none;

  ${({ bold }) => bold && css`
    font-weight: bold;
  `}
`

function MyLabel (props) {
  const { title, bold } = props

  return (
    <MyLabelStyled bold={bold}>
      {title}
    </MyLabelStyled>
  )
}

MyLabel.propTypes = {
  title: PropTypes.string.isRequired,
  bold: PropTypes.bool
}

export default MyLabel
