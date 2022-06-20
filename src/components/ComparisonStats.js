import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { getTopItems, getArtists } from '../controllers/spotify-controller'
import TopGenre from './TopGenre'
import StatContainer from './StatContainer'
import { getAveragePopularity } from '../comparison-analysis'

const StatsContainer = styled.div`
  display : grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap : 10px;
  grid-template-rows: 47px auto;
  justify-content : center;
  width : 100%;
  margin-left : auto;
  margin-right : auto;
`


export default function ComparisonStats (props){

  const [data, setData] = useState([])
  const [hostData, setHostData] = useState([])
  const [artistData, setArtistData] = useState([])
  const [hostArtistData, setHostArtistData] = useState([])

  useEffect(() => {
    const loadData = async() =>{
      if(props.accessToken && props.hostAccessToken){
        let topItems = await getTopItems(props.accessToken, props.type, props.time)
        setData(topItems)
        let hostTopItems = await getTopItems(props.hostAccessToken, props.type, props.time)
        setHostData(hostTopItems)
        if (props.type !== "artists" && props.type !== "obscure-artists"){
          let artists = await getArtists(props.accessToken, topItems)
          setArtistData(artists.data.artists)
          let hostArtists = await getArtists(props.hostAccessToken, hostTopItems)
          setHostArtistData(hostArtists.data.artists)
        }
        else{
          setArtistData(topItems)
          setHostArtistData(hostTopItems)
        }

      }

    }
    loadData()
  }, [props.accessToken, props.hostAccessToken, props.time, props.type])
  return (
    <StatsContainer>
      <h2> Top Genres </h2>
      <TopGenre artistData={artistData} hostArtistData={hostArtistData}/>
      <h2>Average Popularity Score</h2>
      <StatContainer user={getAveragePopularity(data)} hostUser={getAveragePopularity(hostData)}/>


    </StatsContainer>
  )
}
