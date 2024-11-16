
import { useState, useEffect } from "react";
import {
  useParams,
  Outlet,
  NavLink,
  useLocation,
  useNavigate
} from "react-router-dom";
import { getMovieDetails } from "../api/API";
import styles from "../css/MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const backLink = location.state?.from || "/movies";

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie).catch(console.error);
  }, [movieId]);

  if (!movie) {
    return <div>Loading movie details...</div>;
  }

  const { title, poster_path, overview, genres, vote_average } = movie;
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className={styles.container}>
      {/* Przycisk "Back" */}
      <button className={styles.backButton} onClick={() => navigate(backLink)}>
        ← Back
      </button>

      {/* Sekcja szczegółów filmu */}
      <div className={styles.details}>
        <img src={imageUrl} alt={title} className={styles.poster} />
        <div className={styles.info}>
          <h1>{title}</h1>
          <p>User score: {vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>

      <div className={styles.additionalInfo}>
        <h2>Additional Information</h2>
        <div className={styles.navLinks}>
          <NavLink
            to="cast"
            className={styles.navLink}
            activeClassName={styles.activeLink}
          >
            Cast
          </NavLink>
          <NavLink
            to="reviews"
            className={styles.navLink}
            activeClassName={styles.activeLink}
          >
            Reviews
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
