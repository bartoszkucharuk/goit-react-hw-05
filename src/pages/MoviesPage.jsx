import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../API/API";
import MovieList from "../components/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchInput = searchParams.get("searchQuery") || "";

  useEffect(() => {
    if (searchInput) {
      searchMovies(searchInput).then(setMovies).catch(console.error);
    }
  }, [searchInput]);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const searchQuery = form.elements.searchQuery.value;
    setSearchParams({ searchQuery });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          name="searchQuery"
          type="text"
          placeholder="Search movies..."
        />
        <button type="submit">
          Search
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;