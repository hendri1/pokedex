import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { MyLabel, MyInput } from 'components/atoms'

const MyFormFieldStyled = styled.div`
  border: 0;
  margin: 0;
  display: inline-flex;
  padding: 0;
  position: relative;
  min-width: 0;
  flex-direction: column;
  vertical-align: top;
`

const MyFormField = React.forwardRef((props, ref) => {
  const { labelTitle, name, type } = props

  return (
    <MyFormFieldStyled>
      <MyLabel title={labelTitle} />
      <MyInput
        ref={ref}
        name={name}
        type={type}
      />
    </MyFormFieldStyled>
  )
})

MyFormField.propTypes = {
  labelTitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default MyFormField
