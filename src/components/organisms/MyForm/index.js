import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { MyButton } from 'components/atoms'
import { MyFormField } from 'components/molecules'

const MyFormStyled = styled.form`
  width: 100%;
`

const MyFormFieldStyled = styled.div`
  width: 20%;
  margin: auto;
`

const MyFormActionStyled = styled.div`
  width: 20%;
  margin: auto;
`

function MyForm ({ children }) {
  const Children = React.Children.toArray(children)

  function RenderFormField () {
    const content = React.Children.map(Children, (item, itemIndex) => {
      if (item.type !== FormField) return
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

    return (
      <MyFormFieldStyled>
        {content}
      </MyFormFieldStyled>
    )
  }

  function RenderFormAction () {
    const content = React.Children.map(Children, (item, itemIndex) => {
      if (item.type !== FormAction) return
      const { title } = item.props
      return (
        <MyButton
          key={`form-action-${itemIndex}`}
          title={title}
        />
      )
    })

    return (
      <MyFormActionStyled>
        {content}
      </MyFormActionStyled>
    )
  }

  return (
    <MyFormStyled>
      <RenderFormField />
      <RenderFormAction />
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

function FormAction ({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

FormAction.propTypes = {
  children: PropTypes.any
}

MyForm.FormAction = FormAction

export default MyForm
