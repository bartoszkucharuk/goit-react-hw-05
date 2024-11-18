import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../API/API";
import MovieList from "../components/MovieList";
import "../css/HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies).catch(console.error);
  }, []);

  return (
    <div className="homePage">
      <div className="trending-container">
        <h2 className="trending-title">Trending today</h2>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default HomePage;