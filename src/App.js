import './App.css';
import { REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE, SCOPE, BACKEND_URL,
  CLIENT_ID, REFRESH_TOKEN_ENDPOINT } from './config';
import {useEffect, useState} from 'react';
import PageContent from './Pages/PageContent'
import { authorizeFromCode, getUserProfile } from './controllers/spotify-controller'
import { uploadRefreshToken } from './controllers/backend-controller'
import BackgroundEllipse from './components/BackgroundEllipse'
import ReactAudioPlayer from 'react-audio-player'


function App() {
    const [refreshToken, setRefreshToken] = useState("")
    const [accessToken, setAccessToken] = useState("")
    const [loading, setLoading] = useState(false)
    const [userInfo, setUserInfo] = useState({})
    const [layout, setLayout] = useState("single")
    const [hostUser, setHostUser] = useState("")
    const [audioSource, setAudioSource] = useState("")

    const logout = () => {
        setAccessToken("")
        setRefreshToken("")
        window.localStorage.removeItem("code")
        window.localStorage.removeItem("accessToken")
        window.localStorage.removeItem("refreshToken")
        window.localStorage.removeItem("hostUserId")
    }


    useEffect(() => {
      const authorize = async (authCode) =>{
        setLoading(true)

        const result = await authorizeFromCode(authCode)
        const accessTok = result.access_token
        const refreshTok = result.refresh_token
        setAccessToken(accessTok)
        setRefreshToken(refreshTok)
        window.localStorage.setItem("accessToken", accessTok)
        window.localStorage.setItem("refreshToken", refreshTok)

        const userInfo = await getUserProfile(accessTok)
        const userId = userInfo.data.id

        let updated = await uploadRefreshToken(userId, refreshTok)
        if (updated){
          console.log(`successfully updated user ${userId}`)
        }else{
          console.log(`could not add user ${userId}`)
        }

        //upload data to server
        setLoading(false)
      }

      let code = window.localStorage.getItem("code")
      let host = window.localStorage.getItem("hostUserId")
      let accessTok = window.localStorage.getItem("accessToken")
      let refreshTok = window.localStorage.getItem("refreshToken")
      const windowUrl = window.location.search;
      const params = new URLSearchParams(windowUrl);
      const authCode = params.get("code");
      const userParam = params.get("user");

      if (host){
        setHostUser(host)
      }
      else if (userParam){
        window.localStorage.setItem("hostUserId", userParam)
        setHostUser(host)
      }

      if (accessTok && refreshTok){
        setAccessToken(accessTok)
        setRefreshToken(refreshTok)
      }
      //otherwise check if we haven't authorized yet
      else if (!code){

        if (authCode){
          try{
            authorize(authCode);
            window.localStorage.setItem("code", authCode)
          }
          catch(error){
            setLoading(false);
            console.log(error)
            window.localStorage.removeItem("code")
            window.localStorage.removeItem("accessToken")
            window.localStorage.removeItem("refreshToken")
            return
          }
        }

      }

    }, [])

    return (
        <div className="App">
          <ReactAudioPlayer autoPlay src={audioSource}/>
          <BackgroundEllipse color="rgba(253, 11, 69, 0.3)" top="400px" left="50px"/>
          <BackgroundEllipse color="rgba(20, 110, 154, 0.6)" top="0px" left="1100px"/>
          <header className="App-header">
            <h1> Friendify </h1>
          </header>
          {loading? <div> Loading </div> : null}
          {!accessToken ?
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}>Login
                    to Spotify</a>
                :
                <div>
                  <PageContent
                  audioSource={audioSource}
                  setAudioSource={setAudioSource}
                  hostUser={hostUser}
                  accessToken={accessToken}/>

                  <button onClick={logout}>Logout</button>
                </div>}


        </div>
    );
}

export default App;
