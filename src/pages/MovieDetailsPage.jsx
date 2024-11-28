import { useState, useEffect, useRef } from 'react'
import { useParams, NavLink, Link, useLocation, Outlet, useNavigate } from 'react-router-dom'
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

  const { poster_path, title, genres, overview, release_date, popularity, vote_average } = movie; 

  const moviePoster = poster_path
    ? `https://image.tmdb.org/t/p/w200${poster_path}`
    : "https://placehold.co/200x300";
  
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

          <h2>Overview</h2>
          <p>{overview}</p>
          
          <h2>Genres</h2>
          <p>{genresList()}</p>
        </div>  
      </div>
    </div>
  )
}
