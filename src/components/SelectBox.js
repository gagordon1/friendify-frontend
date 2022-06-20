import styled from 'styled-components'

const Select = styled.select`
  border : none;
  font-size : 16px;
  &:focus {
  outline: 0;
}
`

export default function SelectBox(props){

  return (
    <div>
      <h3> {props.title} </h3>
      <Select onChange={props.onChange}>
       {Object.keys(props.options).map(key => <option key={key} value={props.options[key]}> {key} </option>)}
      </Select>
    </div>
  )

}
