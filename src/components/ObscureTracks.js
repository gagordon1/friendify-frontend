import TrackContainer from './TrackContainer'
import styled from 'styled-components'

const DataGrid = styled.div`
  display : grid;
  grid-template-columns: repeat(2, 1fr);
  margin-left: auto;
  margin-right: auto;
`

export default function ObscureTracks(props){

  return (
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
  )
}
