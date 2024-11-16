import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../api/API";
import MovieList from "../components/MovieList";
import styles from "../css/MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (query) {
      searchMovies(query).then(setMovies).catch(console.error);
    }
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.elements.query.value;
    setSearchParams({ query });
  };

  return (
    <div className={styles.container}>
      <form className={styles.searchForm} onSubmit={handleSearch}>
        <input
          name="query"
          type="text"
          className={styles.searchInput}
          placeholder="Search movies..."
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;