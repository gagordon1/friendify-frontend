import TrackContainer from '../components/TrackContainer'
import ComparisonStats from '../components/ComparisonStats'
import styled from "styled-components"
import GenerateBlendPlaylist from "./GenerateBlendPlaylist"

const DataGrid = styled.div`
  display : grid;
  grid-template-columns: repeat(2, 1fr);
  margin-left: auto;
  margin-right: auto;
  justify-content : center;
`

export default function TopItems(props){

  return (
    <div>
      {props.type === "tracks"?
        <GenerateBlendPlaylist
          accessToken={props.accessToken}
          hostAccessToken={props.hostAccessToken}
          time={props.time}
          type={props.type}
          audioSource={props.audioSource}
          setAudioSource={props.setAudioSource}
        />: null}
      <ComparisonStats
        accessToken={props.accessToken}
        hostAccessToken={props.hostAccessToken}
        time={props.time}
        type={props.type}
        />

      <DataGrid>
        <TrackContainer
          audioSource={props.audioSource}
          setAudioSource={props.setAudioSource}
          time={props.time}
          type={props.type}
          accessToken={props.accessToken}
         />

         <TrackContainer
           audioSource={props.audioSource}
           setAudioSource={props.setAudioSource}
           time={props.time}
           type={props.type}
           accessToken={props.hostAccessToken}
          />
      </DataGrid>
    </div>
  )
}
