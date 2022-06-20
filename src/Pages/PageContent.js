import UserPage from './UserPage'
import ComparePage from './ComparePage'


export default function PageContent(props){


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
      audioSource={props.audioSource}
      setAudioSource={props.setAudioSource}
      hostUser={props.hostUser}
      accessToken={props.accessToken}
      />
    )
  }

}
