import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { randomHexaColor } from 'utils'

const MyAvatarStyled = styled.div`
  flex: 0 0 auto;
  margin-right: 16px;
  background-color: ${randomHexaColor};
  color: #FFF;
  width: 40px;
  height: 40px;
  display: flex;
  overflow: hidden;
  position: relative;
  font-size: 1.25rem;
  align-items: center;
  flex-shrink: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1;
  user-select: none;
  border-radius: 50%;
  justify-content: center;
`

function MyAvatar (props) {
  const { suffix } = props

  return (
    <MyAvatarStyled>
      {suffix}
    </MyAvatarStyled>
  )
}

MyAvatar.propTypes = {
  suffix: PropTypes.string
}

MyAvatar.defaultProps = {
  suffix: 'NN'
}

export default MyAvatar
