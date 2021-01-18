import React from 'react'
import { AdditionalItemProps } from '../../NavigationBar'
import SVGLogo from '../../SVGLogo'
import { Divider } from 'semantic-ui-react'
import styled from '../../../theme-styled'
import ProfilePicture from '../../ProfilePicture'
import { MainNavigationUser } from '..'

interface StartItemProps extends AdditionalItemProps {
  logo: string
  onLogoClick: () => void
  onUserClick?: () => void
  user?: MainNavigationUser
}

const Logo = styled(SVGLogo)`
  margin: 0 auto;
`

const CentralProfilePicture = styled(ProfilePicture)`
  margin: 0 auto;
`

const HorizontalDivider = styled.div`
  height: 100%;
  margin: 5px 10px;
  width: 1px;
  color: 'white'
`

const StartItem = (props: StartItemProps) => {
  const horizontal = props.orientation === 'horizontal'
  const smaller = props.collapsed || horizontal
  const size = smaller ? 40 : 150
  const Splitter = horizontal ? <HorizontalDivider /> : <Divider />

  return <>
    <Logo src={props.logo} size={size} onClick={props.onLogoClick} />
    {Splitter}
    {props.user ? <>
      <CentralProfilePicture size={Math.round(size / 1.2)} showName={!smaller} {...props.user} onClick={props.onUserClick} />
      {Splitter}
    </>
      : null}
  </>
}

export default StartItem