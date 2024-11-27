import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../API/API";
import MovieList from "../components/MovieList";


const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies).catch(console.error);
  }, []);

  return (
    <div>
      <div>
        <h2>Trending today</h2>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default HomePage;