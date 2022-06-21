import { useEffect, useState } from 'react';
import { getRefreshToken } from '../controllers/backend-controller'
import { authorizeFromRefreshToken, getUserProfile } from '../controllers/spotify-controller'
import { SelectContainer } from '../components/SelectContainer'
import SelectBox from '../components/SelectBox'
import UserInfo from '../components/UserInfo'
import TopItems from '../components/TopItems'
import ObscureTracks from '../components/ObscureTracks'
import styled from "styled-components"
const typeOptions = {
    "Top Tracks" : "tracks",
    "Top Artists" : "artists",
    "Obscure Tracks" : "obscure-tracks",
    "Obscure Artists" : "obscure-artists"
  }

const timeOptions = {
  "Short" : "short_term",
  "Medium" : "medium_term",
  "Long" : "long_term",
}
const ComparePageContainer = styled.div`
  display : grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content : center;
`
const UserInfoBox = styled.div`
  margin-top: 30px;
  display : flex;
  flex-direction : row;
  justify-content : center;
`


export default function ComparePage(props){

  const [time, setTime] = useState("short_term");

  const [type, setType] = useState("tracks");

  const [userInfo, setUserInfo] = useState({})

  const [hostUserInfo, setHostUserInfo] = useState({})

  const [hostAccessToken, setHostAccessToken] = useState("")

  useEffect(() =>{
    const loadHostUser = async ()=>{
      const refreshToken = await getRefreshToken(props.hostUser)
      if(refreshToken){
          let result = await authorizeFromRefreshToken(refreshToken);
          setHostAccessToken(result.access_token)
      }
    }

    loadHostUser();
  }, [props.hostUser])

  useEffect(() =>{
    const loadUserData = async ()=>{
      if(props.accessToken && hostAccessToken){
        const result = await getUserProfile(props.accessToken)
        const hostResult = await getUserProfile(hostAccessToken)
        setUserInfo(result.data)
        setHostUserInfo(hostResult.data)
      }
    }
    loadUserData();

  }, [props.accessToken, hostAccessToken])

  return(
    <div>
      <UserInfoBox>
        <UserInfo userInfo={userInfo} marginLeft={-500}/>
        <UserInfo userInfo={hostUserInfo} marginLeft={500}/>
      </UserInfoBox>
      <SelectContainer>
        <SelectBox title={"Type"}options={typeOptions} onChange={e => setType(e.target.value)}/>
        <SelectBox title={"Time Period"} options={timeOptions} onChange={e => setTime(e.target.value)}/>
      </SelectContainer>
      <ComparePageContainer>

        {(type === "tracks" || type === "artists")?
          <TopItems
            accessToken={props.accessToken}
            hostAccessToken={hostAccessToken}
            time={time}
            type={type}
            audioSource={props.audioSource}
            setAudioSource={props.setAudioSource}
            /> : null}
        {(type === "obscure-tracks" || type === "obscure-artists")?
          <ObscureTracks
            accessToken={props.accessToken}
            hostAccessToken={hostAccessToken}
            time={time}
            type={type}
            audioSource={props.audioSource}
            setAudioSource={props.setAudioSource}
            /> : null}

      </ComparePageContainer>
    </div>
  )
}
