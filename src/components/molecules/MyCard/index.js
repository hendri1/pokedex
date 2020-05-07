import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { MyAvatar, MyLabel, MyImage } from 'components/atoms'

const MyCardStyled = styled.div`
  max-width: 345px;
  overflow: hidden;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #fff;
`

const MyCardHeaderStyled = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  text-transform: capitalize;
`

const MyCardHeaderContentStyled = styled.div`
  flex: 1 1 auto;
`

const MyCardBodyStyled = styled.div`
  padding: 16px;
`

const MyCardFooterStyled = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
`

function MyCard (props) {
  const { avatarSuffix, labelName, sourceImage, children } = props

  const Children = React.Children.toArray(children)

  function RenderImage () {
    if (!sourceImage) return

    return (
      <MyImage source={sourceImage} />
    )
  }

  function RenderContent () {
    const content = React.Children.map(Children, (item) => {
      if (item.type !== MyCardContent) return
      return item
    })

    return (
      <div>
        {content}
      </div>
    )
  }

  function RenderFooter () {
    const footer = React.Children.map(Children, (item) => {
      if (item.type !== MyCardFooter) return
      return item
    })

    return (
      <div>
        {footer}
      </div>
    )
  }

  return (
    <MyCardStyled>
      <MyCardHeaderStyled>
        <MyAvatar suffix={avatarSuffix} />
        <MyCardHeaderContentStyled>
          <MyLabel title={labelName} />
        </MyCardHeaderContentStyled>
      </MyCardHeaderStyled>
      {RenderImage()}
      <MyCardBodyStyled>
        <RenderContent />
      </MyCardBodyStyled>
      <MyCardFooterStyled>
        <RenderFooter />
      </MyCardFooterStyled>
    </MyCardStyled>
  )
}

MyCard.propTypes = {
  avatarSuffix: PropTypes.string,
  labelName: PropTypes.string,
  sourceImage: PropTypes.string,
  children: PropTypes.any
}

MyCard.defaultProps = {
  avatarSuffix: '',
  labelName: '',
  sourceImage: ''
}

function MyCardContent ({ children }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: children }} />
  )
}

MyCardContent.propTypes = {
  children: PropTypes.any
}

MyCard.Content = MyCardContent

function MyCardFooter ({ children }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: children }} />
  )
}

MyCardFooter.propTypes = {
  children: PropTypes.any
}

MyCard.Footer = MyCardFooter

export default MyCard
