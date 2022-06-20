import { useEffect, useState } from 'react'
import { getUserProfile, getTopItems, getTopObscureItems } from '../controllers/spotify-controller'
import Track from './Track'
import Artist from './Artist'
import { ContentContainer } from './TrackAndArtistStyled'

export default function TrackContainer(props){


  const [trackData, setTrackData] = useState([])

  const [userInfo, setUserInfo] = useState({
    images : [],
    external_urls : [],
    display_name : "",
    id : ""
  });


  useEffect(()=>{
    const loadData = async () =>{
      if(props.accessToken && props.type == "track"){
        const items = await getTopItems(props.accessToken, props.type, props.time)
        setTrackData(items)
      }
      else if(props.accessToken && props.type == "obscure-tracks" ){
        const items = await getTopObscureItems(props.accessToken, props.type, props.time)
        setTrackData(items)
      }
    }
    loadData();

  }, [props.accessToken, props.time, props.type])

  return(
    <ContentContainer>

      {trackData.map(
        obj=> <Track
                key={obj.preview_url}
                audioSource={props.audioSource}
                setAudioSource={props.setAudioSource}
                data={obj}
                />
      )}

    </ContentContainer>
  )
}
