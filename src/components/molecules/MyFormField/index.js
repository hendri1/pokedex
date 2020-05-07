import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { MyLabel, MyInput } from 'components/atoms'

const MyFormFieldStyled = styled.div`
`

function MyFormField (props) {
  const { labelTitle, name, type } = props

  return (
    <MyFormFieldStyled>
      <MyLabel title={labelTitle} />
      <MyInput name={name} type={type} />
    </MyFormFieldStyled>
  )
}

MyFormField.propTypes = {
  labelTitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default MyFormField
