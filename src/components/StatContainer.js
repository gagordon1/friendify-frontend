import styled from 'styled-components'

const Container = styled.div`
  margin-top: 20px;
  display : grid;
  grid-template-columns: repeat(3, 1fr);
`

export default function StatContainer(props){
  return(
    <Container>
      <h2>{props.user}</h2>
      <h3> {props.title} </h3>
      <h2>{props.hostUser}</h2>
    </Container>
  )
}
