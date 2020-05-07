import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { MyCard } from 'components/molecules'

const MyCardListStyled = styled.form`
  padding: 20px;
`

function MyCardList ({ children }) {
  const Children = React.Children.toArray(children)

  function RenderCard () {
    return React.Children.map(Children, (item, itemIndex) => {
      const { id, avatarSuffix, labelName, sourceImage, altImage, children } = item.props

      return (
        <MyCard
          id={id}
          key={`card-${itemIndex}`}
          avatarSuffix={avatarSuffix}
          labelName={labelName}
          sourceImage={sourceImage}
          altImage={altImage}
        >
          {children}
        </MyCard>
      )
    })
  }

  return (
    <MyCardListStyled>
      <RenderCard />
    </MyCardListStyled>
  )
}

MyCardList.propTypes = {
  children: PropTypes.any
}

function Card ({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.any
}

MyCardList.Card = Card

export default MyCardList
