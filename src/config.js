const DEVELOPMENT = true;

const LOCAL_SERVER = "http://localhost:3000"

const PRODUCTION_SERVER = "https://friendify-frontend.herokuapp.com/"

const PRODUCTION_BACKEND_SERVER = "https://friendify-backend-server.herokuapp.com"

const LOCAL_BACKEND_SERVER = "http://localhost:8080"

export const REDIRECT_URI = DEVELOPMENT? LOCAL_SERVER : PRODUCTION_SERVER;

export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";

export const TOKEN_AUTH_ENDPOINT = "https://accounts.spotify.com/api/token";

export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

export const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export const RESPONSE_TYPE = "code";

export const SPOTIFY_API_URL = "https://api.spotify.com/v1"

export const TOP_ITEMS_ENDPOINT = "/me/top"

//https://developer.spotify.com/documentation/general/guides/authorization/scopes/
export const SCOPE = "user-read-recently-played playlist-read-collaborative user-top-read playlist-read-private"

export const BACKEND_URL =  DEVELOPMENT? LOCAL_BACKEND_SERVER : PRODUCTION_BACKEND_SERVER

export const REFRESH_TOKEN_ENDPOINT = "/refresh-token"

export const GET_CURRENT_PROFILE_ENDPOINT = "/me"

export const ARTISTS_ENDPOINT = "/artists"

export const RECOMMENDATIONS_ENDPOINT = "/recommendations"
