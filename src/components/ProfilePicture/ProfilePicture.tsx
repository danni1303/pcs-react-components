import React, { useCallback } from 'react'
import styled from '../../theme-styled'
import _ from 'lodash'
import { Popup } from 'semantic-ui-react'
import { ProfilePictureProps } from '.'

const Image = styled.img<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 100%;
  object-fit: cover;
  margin: 0 auto;

`

const Username = styled.div`
  font-size: 1.2em;
  width: 100%;
  margin-top: 5px;
  text-align: center;
`

const Container = styled.div<{ onClick?: () => void }>`
  text-align: center;
  cursor: ${props => props.onClick ? 'pointer' : 'default'};
`

const ProfilePicture = (props: ProfilePictureProps) => {
  const size = Math.max(props.size, 20)
  const defaultAvatar = '/silhouette.png'
  const onError = useCallback(
    (e) => {
      const el = e.target as HTMLImageElement
      el.src = defaultAvatar
    },
    [defaultAvatar]
  )

  const name = `${props.firstname} ${props.surname}`

  return (
    <Container className={props.className} onClick={props.onClick}>
      <Popup
        content={name}
        position="right center"
        disabled={props.showName}
        trigger={
          <Image
            size={size}
            src={props.avatar ? props.avatar : defaultAvatar}
            alt={`user-profile-image-${props.firstname}-${props.surname}`}
            onError={onError}
          />
        }
      />
      {props.showName && <Username>{props.firstname} {props.surname}</Username>}
    </Container>
  )
}

export default React.memo(ProfilePicture, arePropsTheSame)

function arePropsTheSame(
  oldProps: ProfilePictureProps,
  newProps: ProfilePictureProps
): boolean {
  const propsToCompare = ['username', 'size', 'avatar']
  return _.isEqual(
    _.pick(oldProps, propsToCompare),
    _.pick(newProps, propsToCompare)
  )
}
