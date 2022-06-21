import TrackContainer from './TrackContainer'
import styled from 'styled-components'
import GenerateBlendPlaylist from './GenerateBlendPlaylist'

const DataGrid = styled.div`
  position : relative;
  display : grid;
  grid-template-columns: repeat(2, 1fr);
  margin-left: auto;
  margin-right: auto;
`

export default function ObscureTracks(props){

  return (
    <div>
      <GenerateBlendPlaylist
        accessToken={props.accessToken}
        hostAccessToken={props.hostAccessToken}
        time={props.time}
        type={props.type}
        audioSource={props.audioSource}
        setAudioSource={props.setAudioSource}
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
