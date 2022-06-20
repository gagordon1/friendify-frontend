import axios from 'axios';
import {encode as base64_encode} from 'base-64';
import * as qs from 'qs'
import { TOKEN_AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URI, GET_CURRENT_PROFILE_ENDPOINT,
  CLIENT_SECRET, SPOTIFY_API_URL, TOP_ITEMS_ENDPOINT, ARTISTS_ENDPOINT } from '../config'

export const getTopItems = async (accessToken, type, timeRange) =>{
  let config = {
    headers : {
      'Authorization' : 'Bearer ' + accessToken,
      'Content-Type' : 'application/json'
    },
    params : {
      limit : 50,
      time_range : timeRange
    }
  }
  const response = await axios.get(
    SPOTIFY_API_URL + TOP_ITEMS_ENDPOINT + `/${type}`,
    config
  )
  return response.data.items;
}

export const getTopObscureItems = async (accessToken, type, timeRange) =>{
    let topItems = await getTopItems(accessToken, (type === "obscure-tracks")? "tracks" : "artists", timeRange)
    return topItems.sort((a, b) => a.popularity - b.popularity).slice(0,20);
}

//given top items data get all artists
export const getArtists = async (accessToken, data) =>{
  const artists = data.map(obj => obj.artists[0].id).join(",")

  let config = {
    headers : {
      'Authorization' : 'Bearer ' + accessToken,
      'Content-Type' : 'application/json'
    },
    params : {
      ids : artists
    }
  }
  const response = await axios.get(
    SPOTIFY_API_URL + ARTISTS_ENDPOINT,
    config
  )
  return response;
}

export const authorizeFromCode = async (authCode) =>{

  const params = qs.stringify(
    {
      "code" : authCode,
      "redirect_uri" : REDIRECT_URI,
      "grant_type" : "authorization_code"
    }
  )
  const response = await fetch(
    TOKEN_AUTH_ENDPOINT,
    {
      method : "POST",
      headers: {
        "Content-Type" : "application/x-www-form-urlencoded",
        "Authorization" : "Basic " + base64_encode(CLIENT_ID + ":" + CLIENT_SECRET)
      },
      body : params
    }
  )
  return response.json()
}

export const authorizeFromRefreshToken = async (refreshToken) =>{

  const params = qs.stringify(
    {
      "refresh_token" : refreshToken,
      "grant_type" : "refresh_token"
    }
  )
  const response = await fetch(
    TOKEN_AUTH_ENDPOINT,
    {
      method : "POST",
      headers: {
        "Content-Type" : "application/x-www-form-urlencoded",
        "Authorization" : "Basic " + base64_encode(CLIENT_ID + ":" + CLIENT_SECRET)
      },
      body : params
    }
  )
  return response.json()
}

export const getUserProfile = async (authToken) =>{

  let config = {
    headers: {
      "Content-Type" : "application/json",
      "Authorization" : "Bearer " + authToken
    }
  }
  const response = axios.get(
    SPOTIFY_API_URL + GET_CURRENT_PROFILE_ENDPOINT,
    config
  )
  return response
}
