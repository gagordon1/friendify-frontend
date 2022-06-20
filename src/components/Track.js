import { SpotifyImage, TitleAndArtist, Tile,
  TrackTitle, PlayPause, PauseButton, PlayButton, Artists } from './TrackAndArtistStyled'
import { useState, useEffect} from 'react'
import PlayButtonImage from '../assets/play_button.svg'
import PauseButtonImage from '../assets/pause_button.svg'



export default function Track(props){

  const [playing, setPlaying] = useState(false)

  const handleClick = async (event) => {
    if (props.audioSource === props.data.preview_url && playing){
      setPlaying(false)
      props.setAudioSource("")
    }
    else if (!playing) {
      setPlaying(true)
      props.setAudioSource(props.data.preview_url)
    }

  };

  useEffect(() =>{
    if (playing && props.audioSource !== props.data.preview_url){
      setPlaying(false)
    }
  }, [props.audioSource])

  return (
    <Tile>
      <PlayPause onClick={handleClick}>
        <SpotifyImage src={props.data.album.images[0].url} />
        {!playing? <PlayButton src={PlayButtonImage}/> : null}
        <PauseButton src={PauseButtonImage} display={playing? "flex" : "none"}/>
      </PlayPause>
      <TitleAndArtist>
        <TrackTitle>{props.data.name} </TrackTitle>
        <Artists>{props.data.artists.map(obj => obj.name).join(", ")} </Artists>
      </TitleAndArtist>
    </Tile>
  )
}
