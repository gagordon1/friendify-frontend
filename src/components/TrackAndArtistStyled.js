import styled from 'styled-components'
import { devices, fontSizes } from '../Theme'

export const PlayPause = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
`
export const PlayButton = styled.img`
  height : 30px;
  width : auto;
  position : absolute;
  display : none;
  ${PlayPause}:hover &{
    display: flex;
  }
`

export const PauseButton = styled.img`
  height : 30px;
  width : auto;
  position : absolute;
  display : ${props => props.display};
`

export const SpotifyImage = styled.img`
  width : 74px;
  height : 74px;
  object-fit : cover;
  ${PlayPause}:hover &{
    filter: brightness(50%);
  }
  @media (max-width : ${devices.mobileL}px){
    width : 50px;
    height : 50px;
  }
`

export const SpotifyProfileImage = styled.img`
  display : flex;
  position : relative;
  width : 200px;
  height : 200px;
  margin-left: auto;
  margin-right : auto;
  border-radius : 50%;
  object-fit : cover;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  @media (max-width : ${devices.mobileL}px){
    width : 100px;
    height : 100px;
  }
`

export const TitleAndArtist = styled.div`
  display : grid;
  grid-template-columns: repeat(1, 1fr);
  height : 100%;
  text-align : left;
  margin-left : 20px;
`

export const Tile = styled.div`
  display : flex;
  margin-left : auto;
  margin-right : auto;
  align-items: center;
  margin-bottom : 10px;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  max-width : 150px;
`
export const ArtistTile = styled.div`
  max-width : 150px;
  display : flex;
  margin-left : auto;
  margin-right : auto;
  align-items: center;
  margin-bottom : 10px;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
`

export const TrackTitle = styled.h5`
  margin-top : 2px;
  margin-bottom : 2px;
  font-size : ${fontSizes.laptop}px;
  @media (max-width : ${devices.mobileL}px){
    font-size : ${fontSizes.mobile}px;
  }
`

export const ContentContainer = styled.div`
  width : 100%;
  margin-top : 30px;
  justify-content: center;

  @media (max-width : ${devices.mobileL}px){
    font-size : ${fontSizes.mobile}px;
  }
`
export const Artists = styled.a`
  font-size : ${fontSizes.laptop}px;
  @media (max-width : ${devices.mobileL}px){
    font-size : ${fontSizes.mobile}px;
  }
`
