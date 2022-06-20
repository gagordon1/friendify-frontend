import styled, {css} from 'styled-components';

const Ellipse = styled.div`
    position: fixed;
    width: 372px;
    height: 341px;
    left: ${props => props.left};
    top: ${props => props.top};
    background: ${props => props.color};
    filter: blur(200px);
    border-radius: 50%;
    `





export default function BackgroundEllipse(props){
  return (
    <Ellipse
    color={props.color}
    left={props.left}
    top={props.top}
    />
  )
}
