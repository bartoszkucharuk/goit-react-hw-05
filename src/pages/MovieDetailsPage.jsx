import { useState, useEffect } from 'react'
import { useParams, NavLink, useLocation, Outlet, useNavigate } from 'react-router-dom'
import { getMovieDetails } from '../API/API'
import css from "../css/MovieDetailsPage.module.css"

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const goBackLocation = location.state?.from || "/movies";

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(console.error);
  }, [movieId])

  if (!movie) {
    return <div>Loading...</div>;
  }

  const { poster_path, title, genres, overview, release_date, vote_average } = movie; 

  const moviePoster = poster_path
    ? `https://image.tmdb.org/t/p/w200${poster_path}`
    : "https://placehold.co/200x300?text=no+photo";
  
  const releaseYear = release_date.split("-")[0];
  const genresList = () => genres.map((genre) => genre.name).join(", ");

  return (
    <div className={css.movieDetailsPage}>
      <button className={css.button} onClick={() => navigate(goBackLocation)}>go back</button>
      <div className={css.detailsCard}>
        <img classname={css.moviePoster} src={moviePoster} alt={title} />
        <div className={css.detailsDesc}>
          <h2 className={css.title}>{title} ({releaseYear})</h2>
          <p className={css.desc}>User Score: {vote_average.toFixed(1)}</p>

          <h3 className={css.header}>Overview</h3>
          <p className={css.overview}>{overview}</p>
          
          <h3 className={css.header}>Genres</h3>
          <p className={css.desc}>{genresList()}</p>
        </div>
      </div>

      <div>
        <h3 className={css.additionalInformation}>Additional information</h3>
        <div className={css.navMenu}>
          <NavLink className={css.navLink} to="cast">Cast</NavLink>
          <NavLink className={css.navLink} to="reviews">Reviews</NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
