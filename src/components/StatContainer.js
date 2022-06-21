import styled from 'styled-components'
import { fontSizes, devices } from '../Theme'

const Container = styled.div`
  margin-top: 20px;
  display : grid;
  grid-template-columns: repeat(3, 1fr);
`

const Title = styled.h3`
`

export default function StatContainer(props){
  return(
    <Container>
      <h2>{props.user}</h2>
      <Title> {props.title} </Title>
      <h2>{props.hostUser}</h2>
    </Container>
  )
}
