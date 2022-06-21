import styled from 'styled-components'
import Popup from 'reactjs-popup';
import { useState } from 'react'
import { REDIRECT_URI } from '../config'
import CopyIconImage from '../assets/copy_icon.png'

const Button = styled.button`
  margin-top : 20px;
  margin-bottom : 40px;
  position : relative;
  width: 270px;
  height: 50px;
  background: rgba(85, 85, 85, 0.05);
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
  display : flex;
  flex-direction : column;
  justify-content : center;
  width: 300px;
  height: 150px;
  transform: translate(-50%, -50%);
  background: #F5F5F5;
  opacity: 0.9;
`

const Title = styled.h3`
  margin-left : auto;
  margin-right : auto;
`
const GeneratedLink = styled.div`
  border : none;
  white-space : nowrap;
  background : #FFFFFF;
  width : 225px;
  overflow : scroll;
  margin-left : auto;
  margin-right : auto;

`
const LinkContainer = styled.div`
  display : flex;
  flex-direction : row;
  align-items : center;
  justify-content : center;

`
const CopyIcon = styled.img`
  width : 20px;
  height : 20px;
  padding : none;
  margin-right : 25px;
  &:hover{
    cursor : pointer;
  }
`

export default function GenerateLink(props){

  const [open, setOpen] = useState(false)

  const assembleLink = () => REDIRECT_URI + "/?user=" + props.userInfo.id

  const generateLink = () =>{
    setOpen(true)
  }

  const copyToClipboard = () =>{
    const el = document.createElement('textarea');
    el.value = assembleLink();
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("Copied Link to Clipboard.")
  }

  return(
    <div>
      <Button onClick={() => generateLink()}>
        <ButtonLabel>Generate Invite Link</ButtonLabel>
      </Button>
      <Popup open={open} onClose={() => setOpen(false)}>
        <Dialogue>
          <Title> Invite Link </Title>
          <LinkContainer>
            <GeneratedLink>{assembleLink()}</GeneratedLink>
            <CopyIcon src={CopyIconImage} onClick={copyToClipboard}/>
          </LinkContainer>
        </Dialogue>
      </Popup>
    </div>

  )
}
