import { ArtistTile, SpotifyImage, TitleAndArtist, TrackTitle } from './TrackAndArtistStyled'
import DefaultImage from '../assets/default_profile.png'

export default function Artist(props){

  return (
    <ArtistTile>
      <SpotifyImage src={(props.data.images && props.data.images.length > 0)?
        props.data.images[0].url : DefaultImage}/>
      <TitleAndArtist>
        <TrackTitle> {props.data.name} </TrackTitle>
      </TitleAndArtist>
    </ArtistTile>
  )

}
