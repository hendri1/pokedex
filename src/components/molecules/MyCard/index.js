import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { MyAvatar, MyLabel, MyImage } from 'components/atoms'

const MyCardStyled = styled.div`
  width: 30%;
  min-height: 200px;
  overflow: hidden;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #fff;
  margin: 20px;
  float: left;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #ccc;
    transition: 0.5s;
  }

  ${({ full }) => full && css`
    float: none;
  `}
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
  const history = useHistory()
  const { id, avatarSuffix, labelName, sourceImage, altImage, full, children } = props

  const Children = React.Children.toArray(children)

  function goToDetail (id) {
    if (id) history.push(`/detail?id=${id}`)
  }

  function RenderImage () {
    if (!sourceImage) return

    return (
      <MyImage
        source={sourceImage}
        altImage={altImage}
      />
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
    <MyCardStyled
      full={full}
      onClick={() => goToDetail(id)}
    >
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
  id: PropTypes.number,
  avatarSuffix: PropTypes.string,
  labelName: PropTypes.string,
  sourceImage: PropTypes.string,
  altImage: PropTypes.string,
  full: PropTypes.bool,
  children: PropTypes.any
}

MyCard.defaultProps = {
  id: 0,
  avatarSuffix: '',
  labelName: '',
  sourceImage: '',
  altImage: '',
  full: false
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
