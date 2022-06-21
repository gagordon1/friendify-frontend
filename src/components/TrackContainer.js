import { useEffect, useState } from 'react'
import { getTopItems, getTopObscureItems } from '../controllers/spotify-controller'
import Track from './Track'
import Artist from './Artist'
import { ContentContainer } from './TrackAndArtistStyled'

export default function TrackContainer(props){


  const [trackData, setTrackData] = useState([])

  const getTrackList = (data) => data.map(
    obj=> <Track
            key={obj.id}
            audioSource={props.audioSource}
            setAudioSource={props.setAudioSource}
            data={obj}
            />
  )

  const getArtistList = (data) => data.map(
    obj=> <Artist
            key={obj.id}
            audioSource={props.audioSource}
            setAudioSource={props.setAudioSource}
            data={obj}
            />
  )


  useEffect(()=>{
    const loadData = async () =>{
      if(props.accessToken && (props.type === "tracks" || props.type === "artists")){
        const items = await getTopItems(props.accessToken, props.type, props.time)
        setTrackData(items)
      }
      else if(props.accessToken && (props.type === "obscure-tracks" || props.type === "obscure-artists")){
        const items = await getTopObscureItems(props.accessToken, props.type, props.time)
        setTrackData(items)
      }

    }
    loadData();

  }, [props.accessToken, props.time, props.type])

  if(trackData.length > 0){
    return(
      <ContentContainer>

        {(props.type === "tracks" || props.type==="obscure-tracks")?
        getTrackList(trackData) : getArtistList(trackData) }

      </ContentContainer>
    )
  }else{
    return null
  }


}
