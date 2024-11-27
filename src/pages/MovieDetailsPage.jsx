import { useState, useEffect } from "react";
import {
  useParams,
  Outlet,
  NavLink,
  useLocation,
  useNavigate
} from "react-router-dom";
import { getMovieDetails } from "../API/API";
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
    <div>
      {/* Przycisk "Back" */}
      <button onClick={() => navigate(backLink)}>
        ← Back
      </button>

      {/* Sekcja szczegółów filmu */}
      <div>
        <img src={imageUrl} alt={title} />
        <div>
          <h1>{title}</h1>
          <p>User score: {vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>

      <div>
        <h2>Additional Information</h2>
        <div>
          <NavLink
            to="cast"
            activeClassName={styles.activeLink}
          >
            Cast_
          </NavLink>
          <NavLink
            to="reviews"
            activeClassName={styles.activeLink}
          >
            Reviews_
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;