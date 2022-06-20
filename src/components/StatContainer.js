import styled from 'styled-components'

const Container = styled.div`
  display : grid;
  grid-template-columns: repeat(2, 1fr);
`

export default function StatContainer(props){
  return(
    <Container>
      <h2>{props.user}</h2>
      <h2>{props.hostUser}</h2>
    </Container>
  )
}
