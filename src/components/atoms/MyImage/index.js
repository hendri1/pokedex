import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MyImageWrapperStyled = styled.div`
  width: 100%;
`

const MyImageStyled = styled.img`
  display: block;
  margin: auto;
`

function MyImage (props) {
  const { source } = props

  return (
    <MyImageWrapperStyled>
      <MyImageStyled src={source} />
    </MyImageWrapperStyled>
  )
}

MyImage.propTypes = {
  source: PropTypes.string
}

MyImage.defaultProps = {
  source: ''
}

export default MyImage
