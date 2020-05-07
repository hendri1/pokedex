import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { MyCard } from 'components/molecules'

const MyCardListStyled = styled.form`
`

function MyCardList ({ children }) {
  const Children = React.Children.toArray(children)

  function RenderCard () {
    return React.Children.map(Children, (item, itemIndex) => {
      const { avatarSuffix, labelName, sourceImage, children } = item.props

      return (
        <MyCard
          key={`card-${itemIndex}`}
          avatarSuffix={avatarSuffix}
          labelName={labelName}
          sourceImage={sourceImage}
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
