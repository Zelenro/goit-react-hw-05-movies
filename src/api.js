import axios from 'axios';

const API_KEY = 'af6fe275baf026f12ed99f4e86a8bbff';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});
