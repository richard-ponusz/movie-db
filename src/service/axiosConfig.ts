import axios from "axios";
const accessToken = process.env.REACT_APP_TMDB_ACCESS_TOKEN;

const tmdbAxiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`,
  }
})

export default tmdbAxiosInstance;
