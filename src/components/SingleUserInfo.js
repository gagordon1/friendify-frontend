import { SpotifyProfileImage } from './TrackAndArtistStyled'
import DefaultProfile from '../assets/default_profile.png'
import styled from 'styled-components'

const SingleUserInfoContainer = styled.div`
  margin-top : 50px;
  position : relative;
`

export default function SingleUserInfo(props){

  return(
    <SingleUserInfoContainer>
      <SpotifyProfileImage src={(!props.userInfo.images || props.userInfo.images.length === 0)? DefaultProfile
        : props.userInfo.images[0].url}/>
      <h1> {props.userInfo.display_name} </h1>
    </SingleUserInfoContainer>
  )

}
