import styled from 'styled-components'

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
  ${PlayPause}:hover &{
    filter: brightness(50%);
  }
`

export const SpotifyProfileImage = styled.img`
  display : flex;
  width : 200px;
  height : 200px;
  margin-left: auto;
  margin-right : auto;
  border-radius : 50%;
  object-fit : cover;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
`

export const TitleAndArtist = styled.div`
  display : grid;
  grid-template-columns: repeat(1, 1fr);
  height : 100%;
  text-align : left;
  margin-left : 20px;
`

export const Tile = styled.div`
  max-width : 200px;
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
`

export const ContentContainer = styled.div`
  width : 360px;
  margin-top : 30px;
  justify-content: center;
`
export const Artists = styled.a`
  font-size : 12px;
`
