import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { MyFormField } from 'components/molecules'

const MyFormStyled = styled.form`
`

function MyForm ({ children }) {
  const Children = React.Children.toArray(children)

  function RenderFormField () {
    return React.Children.map(Children, (item, itemIndex) => {
      const { labelTitle, name, type } = item.props
      return (
        <MyFormField
          key={`form-field-${itemIndex}`}
          labelTitle={labelTitle}
          name={name}
          type={type}
        />
      )
    })
  }

  return (
    <MyFormStyled>
      <RenderFormField />
    </MyFormStyled>
  )
}

MyForm.propTypes = {
  children: PropTypes.any
}

function FormField ({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

FormField.propTypes = {
  children: PropTypes.any
}

MyForm.FormField = FormField

export default MyForm
