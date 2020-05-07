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
  const { source, altImage } = props

  return (
    <MyImageWrapperStyled>
      <MyImageStyled
        src={source}
        alt={altImage}
        loading='lazy'
      />
    </MyImageWrapperStyled>
  )
}

MyImage.propTypes = {
  source: PropTypes.string.isRequired,
  altImage: PropTypes.string
}

MyImage.defaultProps = {
  altImage: 'default alt'
}

export default MyImage
