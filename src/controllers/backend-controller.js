import { BACKEND_URL, REFRESH_TOKEN_ENDPOINT } from '../config'
import axios from 'axios';
//Returns true if successfully updated, false otherwise
export const uploadRefreshToken =  async (userId, refreshToken) => {
  const response = await axios.post(
    BACKEND_URL + REFRESH_TOKEN_ENDPOINT,
    {
        userId : userId,
        refreshToken : refreshToken
    }
  )
  let result = await response;
  return (result.data.message === "Success")? true : false
}

export const getRefreshToken =  async (userId) => {
  const response = await axios.get(
    BACKEND_URL + REFRESH_TOKEN_ENDPOINT + `/${userId}`
  )
  let result = await response;
  return (result.data.refreshToken? result.data.refreshToken : false)
}
