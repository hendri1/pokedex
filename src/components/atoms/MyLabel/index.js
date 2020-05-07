import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MyLabelStyled = styled.label`
  color: #000;
`

function MyLabel (props) {
  const { title } = props

  return (
    <MyLabelStyled>
      {title}
    </MyLabelStyled>
  )
}

MyLabel.propTypes = {
  title: PropTypes.string.isRequired
}

export default MyLabel
