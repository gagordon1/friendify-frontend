import styled from 'styled-components'
import { devices } from '../Theme'
export const SelectContainer = styled.div`
  display : grid;
  grid-template-columns: repeat(2, 1fr);
  width : 500px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width : ${devices.mobileL}px){
    width : 300px;
  }

`
