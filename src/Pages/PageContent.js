import UserPage from './UserPage'
import ComparePage from './ComparePage'
import styled from 'styled-components'
import { useState } from 'react'


export default function PageContent(props){

  const [loading, setLoading] = useState(false)


  if (!props.hostUser){
    return (
      <UserPage
      audioSource={props.audioSource}
      setAudioSource={props.setAudioSource}
      accessToken={props.accessToken}/>
    )
  }else{
    return(
      <ComparePage
      setLoading={setLoading}
      audioSource={props.audioSource}
      setAudioSource={props.setAudioSource}
      hostUser={props.hostUser}
      accessToken={props.accessToken}
      />
    )
  }

}
