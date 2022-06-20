import { useEffect, useState } from 'react'
import { getTopGenres } from '../comparison-analysis'
import styled from 'styled-components'
//computes top genre for each user
//
//
const GenreContainer = styled.div`
  position : relative;
  display : grid;
  grid-template-columns: repeat(2, 1fr);
  width : 100%;
  text-align : left;
`

const Genre = styled.h4`
  width : 100px;
  margin-top: 2px;
  margin-bottom: 0px;
  margin-left : auto;
  margin-right : auto;
`



export default function TopGenre(props){

  const [genres, setGenres] = useState([])
  const [hostGenres, setHostGenres] = useState([])

  useEffect(() =>{
    if(props.artistData && props.hostArtistData){

      setGenres(getTopGenres(props.artistData))
      setHostGenres(getTopGenres(props.hostArtistData))
    }

  }, [props.artistData, props.hostArtistData])

  return(
    <GenreContainer>
      <div>
        {genres.map((genre, i) => <Genre key={i}>{i+1}. {genre}</Genre>)}
      </div>
      <div>
        {hostGenres.map((genre, i) => <Genre key={i}>{i+1}. {genre}</Genre>)}
      </div>
    </GenreContainer>
  )

}
