import { ArtistTile, SpotifyImage, TitleAndArtist, TrackTitle } from './TrackAndArtistStyled'
import DefaultImage from '../assets/default_profile.png'

export default function Artist(props){

  const getImage = () =>{
    try{
      return props.data.images[0].url
    }catch(error){
      return DefaultImage
    }
  }

  const getName = ()=>{
    try{
      return props.data.name
    }catch(error){
      return ""
    }
  }

  return (
    <ArtistTile>
      <SpotifyImage src={getImage()}/>
      <TitleAndArtist>
        <TrackTitle> {getName()} </TrackTitle>
      </TitleAndArtist>
    </ArtistTile>
  )

}
