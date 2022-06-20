import { SpotifyProfileImage } from './TrackAndArtistStyled'
import DefaultProfile from '../assets/default_profile.png'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const UserInfoContainer = styled.div`
  position : fixed;
  top: 50%;
  left : ${props => props.left};
  transform: translate(-50%, -50%);
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
