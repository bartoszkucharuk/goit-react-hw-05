import axios from "axios";

const API_KEY = "ba0caca6f3e7cd9987ae58a50d4a8086";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  // console.log(response.data.results);
  return response.data.results;
};