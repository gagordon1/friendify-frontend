import { SpotifyProfileImage } from './TrackAndArtistStyled'
import DefaultProfile from '../assets/default_profile.png'
import styled from 'styled-components'
import { devices } from '../Theme'

const UserInfoContainer = styled.div`
  position : fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  left : 50%;
  margin-left : ${props => props.marginLeft}px;
  width : 500px;
  @media (max-width: ${devices.tabletL}px) {
    width : 100%;
    position : relative;
    margin : auto;
    top : auto;
    left : auto;
    transform : none;
  }
`

export default function UserInfo(props){

  return(
    <UserInfoContainer top={props.top} marginLeft={props.marginLeft}>
      <SpotifyProfileImage src={(!props.userInfo.images || props.userInfo.images.length === 0)? DefaultProfile
        : props.userInfo.images[0].url}/>
      <h1> {props.userInfo.display_name} </h1>
    </UserInfoContainer>
  )

}
