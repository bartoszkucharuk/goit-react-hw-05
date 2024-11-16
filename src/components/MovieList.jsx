import { Link, useLocation } from "react-router-dom";
import styles from "../css/MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div className={styles.movieGrid}>
      {movies.map((movie) => (
        <div key={movie.id} className={styles.movieCard}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={styles.movieLink}
          >
            {/* <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                  : "https://via.placeholder.com/200x300?text=No+Image"
              }
              alt={movie.title}
              className={styles.movieImage}
            /> */}
            <div className={styles.movieTitleContainer}>
              <h3 className={styles.movieTitle}>{movie.title}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;