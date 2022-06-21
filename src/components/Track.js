import { SpotifyImage, TitleAndArtist, Tile,
  TrackTitle, PlayPause, PauseButton, PlayButton, Artists } from './TrackAndArtistStyled'
import { useState, useEffect} from 'react'
import PlayButtonImage from '../assets/play_button.svg'
import PauseButtonImage from '../assets/pause_button.svg'
import DefaultImage from '../assets/default_profile.png'



export default function Track(props){

  const [playing, setPlaying] = useState(false)

  const getName = () => {try{return props.data.name}catch(error){return ""}}

  const getImageSource = () =>{
    try{
      return props.data.album.images[0].url
    }catch(error){
      return DefaultImage
    }

  }

  const getArtists = () =>{
    try{
      return props.data.artists.map(obj => obj.name).join(", ")
    }
    catch(error){
      return ""
    }
  }

  const handleClick = async (event) => {
    console.log(props.data.preview_url)
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
  }, [playing, props.audioSource, props.data.preview_url])

  return (
    <Tile>
      <PlayPause onClick={handleClick}>
        <SpotifyImage src={getImageSource()} />
        {!playing? <PlayButton src={PlayButtonImage}/> : null}
        <PauseButton src={PauseButtonImage} display={playing? "flex" : "none"}/>
      </PlayPause>
      <TitleAndArtist>
        <TrackTitle>{getName()} </TrackTitle>
        <Artists>{getArtists()} </Artists>
      </TitleAndArtist>
    </Tile>
  )
}
