
import { useEffect, useState } from 'react';
import { getRefreshToken } from '../controllers/backend-controller'
import { authorizeFromRefreshToken, getUserProfile } from '../controllers/spotify-controller'
import { SelectContainer } from '../components/SelectContainer'
import SelectBox from '../components/SelectBox'
import SingleUserInfo from '../components/SingleUserInfo'
import TrackContainer from '../components/TrackContainer'
import styled from "styled-components"
const typeOptions = {
    "Top Tracks" : "tracks",
    "Top Artists" : "artists",
    "Most Obscure Tracks" : "obscure-tracks",
    "Most Obscure Artists" : "obscure-artists"
  }

const timeOptions = {
  "Short" : "short_term",
  "Medium" : "medium_term",
  "Long" : "long_term",
}
const ComparePageContainer = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
`


export default function UserPage(props){

  const [time, setTime] = useState("short_term");

  const [type, setType] = useState("tracks");

  const [userInfo, setUserInfo] = useState({})

  const [hostUserInfo, setHostUserInfo] = useState({})


  useEffect(() =>{
    const loadUserData = async ()=>{
      if(props.accessToken){
        const result = await getUserProfile(props.accessToken)
        setUserInfo(result.data)
      }
    }
    loadUserData();

  }, [props.accessToken])

  return(
    <div>

      <SelectContainer>
        <SelectBox title={"Type"}options={typeOptions} onChange={e => setType(e.target.value)}/>
        <SelectBox title={"Time Period"} options={timeOptions} onChange={e => setTime(e.target.value)}/>
      </SelectContainer>
      <ComparePageContainer>
        <SingleUserInfo userInfo={userInfo}/>
        <TrackContainer
          audioSource={props.audioSource}
          setAudioSource={props.setAudioSource}
          time={time}
          type={type}
          accessToken={props.accessToken}
        />

      </ComparePageContainer>
    </div>
  )
}
