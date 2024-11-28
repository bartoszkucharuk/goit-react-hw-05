import { useState, useEffect, useRef } from 'react'
import { useParams, NavLink, useLocation, Outlet, useNavigate } from 'react-router-dom'
import { getMovieDetails } from '../API/API'

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const goBackLocation = location.state?.from || "/movies";

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie).catch(console.error);
  }, [movieId])

  if (!movie) {
    return <div>Loading infos...</div>;
  }

  const { poster_path, title, genres, overview, release_date, vote_average } = movie; 

  const moviePoster = poster_path
    ? `https://image.tmdb.org/t/p/w200${poster_path}`
    : "https://placehold.co/200x300?text=no+photo";
  
  const releaseYear = release_date.split("-")[0];
  const genresList = () => genres.map((genre) => genre.name).join(", ");

  return (
    <div>
      <button onClick={() => navigate(goBackLocation)}>&larr; Go back</button>
      <div>
        <img src={moviePoster} alt={title} />
        <div>
          <h2>{title} ({releaseYear})</h2>
          <p>User Score: {vote_average.toFixed(1)}</p>

          <h3>Overview</h3>
          <p>{overview}</p>
          
          <h3>Genres</h3>
          <p>{genresList()}</p>
        </div>
      </div>

      <div>
        <h3>Additional information</h3>
        <div>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
