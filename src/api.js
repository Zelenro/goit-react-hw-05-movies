import axios from 'axios';

const API_KEY = 'b2aaaeeb420dc35d010d2369370f1da0';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
    language: 'en-US',
    media_type: 'movie',
    include_adult: 'false',
  },
});

export const fetchTrendingMovieDay = async () => {
  const response = await axiosInstance.get(`trending/movie/day?`);
  return response.data.results;
};

export const fetchMovieById = async (id, controller) => {
  const response = await axiosInstance.get(`/movie/${id}`, {
    signal: controller,
  });
  return response.data;
};

export const fetchMovieCast = async (id, controller) => {
  const response = await axiosInstance.get(`/movie/${id}/credits?`, {
    signal: controller,
  });
  return response.data.cast;
};

export const fetchMovieReviews = async (id, controller) => {
  const response = await axiosInstance.get(`/movie/${id}/reviews`, {
    signal: controller,
  });
  return response.data.results;
};

export const fetchSearchMovie = async query => {
  const response = await axiosInstance.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&page=1`
  );
  return response.data.results;
};
