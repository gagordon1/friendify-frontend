import styled from 'styled-components'
import Popup from 'reactjs-popup';
import Track from './Track'
import { useState } from 'react'
import { getRecommendations, getTopObscureItems,
  getArtists } from '../controllers/spotify-controller';
import { getTopGenres } from '../comparison-analysis'

const Button = styled.button`
  position : relative;
  margin-top: 40px;
  margin-bottom: 20px;
  width: 270px;
  height: 50px;
  background: rgba(85, 85, 85, 0.05);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.25);
  border : none;
  &:hover{
    cursor : pointer;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  }
  &:active{
    box-shadow: 0 0px rgba(0, 0, 0, 0.25);
    transform: translateY(2px);
  }
`
const Button2 = styled.button`
  justify-self : center;
  width : 100%;
  height: 50px;
  background: rgba(85, 85, 85, 0.05);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.25);
  border : none;
  &:hover{
    cursor : pointer;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  }
  &:active{
    box-shadow: 0 0px rgba(0, 0, 0, 0.25);
    transform: translateY(2px);
  }
`
const ButtonLabel = styled.h3`
  margin-top: auto;
  margin-bottom : auto;
`

const Dialogue = styled.div`
  position: absolute;
  grid-gap : 20px;
  display : grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content : center;
  width: 300px;
  height: 471px;
  margin : auto;
  transform: translate(-50%, -50%);
  background: #F5F5F5;
  opacity: 0.9;
`

const TrackScroller = styled.div`
  overflow-y : scroll;
`

const ButtonContainer = styled.div`
  display : grid;
  grid-template-columns: repeat(2, 1fr);
`


export default function GenerateBlendPlayist(props){

  const [open, setOpen] = useState(false)
  const [tracks, setTracks] = useState([])

  const generateBlendPlaylist = async () =>{
    let topGenres = []
    let topHostGenres = []
    let topArtists = []
    let topHostArtists = []
    //host
    let topHostItems = await getTopObscureItems(props.hostAccessToken, props.type, props.time)
    if (props.type === "obscure-tracks"){
      topHostArtists = await getArtists(props.hostAccessToken, topHostItems)
      topHostGenres = await getTopGenres(topHostArtists.data.artists)
      console.log(topHostGenres)
    }
    let topItems = await getTopObscureItems(props.accessToken, props.type, props.time)
    console.log(topItems);
    if (props.type === "obscure-tracks"){
      topArtists = await getArtists(props.accessToken, topItems)
      topGenres = await getTopGenres(topArtists.data.artists)
      console.log(topGenres)
    }
    const comboGenres = topGenres.slice(0,1)
    const comboArtists = topArtists.data.artists.slice(0,1).map(obj => obj.id)
              .concat(topHostArtists.data.artists.slice(0,2).map(obj => obj.id))
    const comboTracks = topHostItems.slice(0,1)
    const seedGenres = comboGenres[0]
    const seedArtists = comboArtists.join(",")
    const seedTracks = comboTracks[0].id
    console.log(seedArtists)
    console.log(seedGenres)
    console.log(seedTracks)

    const recs = await getRecommendations(props.accessToken, seedArtists, seedTracks, seedGenres)
    console.log(recs)
    setTracks(recs)

    //user
    setOpen(true)

  }

  return(
    <div>
      <Button onClick={() => generateBlendPlaylist()}>
        <ButtonLabel>Generate Blend Playlist</ButtonLabel>
      </Button>
      <Popup open={open}>
        <Dialogue>
          <ButtonContainer>
            <Button2 onClick={() => setOpen(false)}>
              <ButtonLabel>Cancel</ButtonLabel>
            </Button2>
            <Button2 onClick={()=>{}}>
              <ButtonLabel>Add to Library</ButtonLabel>
            </Button2>
          </ButtonContainer>
          <TrackScroller>
            {tracks.map(obj => <Track
                    key={obj.id}
                    audioSource={props.audioSource}
                    setAudioSource={props.setAudioSource}
                    data={obj}
                    />)}
          </TrackScroller>
        </Dialogue>

      </Popup>
    </div>

  )
}
