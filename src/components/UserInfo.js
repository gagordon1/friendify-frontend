import { SpotifyProfileImage } from './TrackAndArtistStyled'
import DefaultProfile from '../assets/default_profile.png'
import styled from 'styled-components'
import { devices } from '../Theme'

const UserInfoContainer = styled.div`
  position : fixed;
  top: 50%;
  left : ${props => props.left};
  transform: translate(-50%, -50%);
  @media (max-width: ${devices.tablet}px) {
    position : relative;
    margin : auto;
    top : auto;
    left : auto;
    transform : none;
  }
`

export default function UserInfo(props){

  return(
    <UserInfoContainer top={props.top} left={props.left}>
      <SpotifyProfileImage src={(!props.userInfo.images || props.userInfo.images.length === 0)? DefaultProfile
        : props.userInfo.images[0].url}/>
      <h1> {props.userInfo.display_name} </h1>
    </UserInfoContainer>
  )

}
