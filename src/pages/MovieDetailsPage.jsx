import { useState, useEffect, useRef } from 'react'
import { useParams, NavLink, Link, useLocation, Outlet, useNavigate } from 'react-router-dom'
import { getMovieDetails } from '../API/API'

export default function MovieDetailsPage() {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const locationBack = location.state?.from || "/movies";

  useEffect(() => {
    getMovieDetails(movieID).then(setMovie).catch(console.error);
  }, [movieID])

  if (!movie) {
    return <div>Loading infos...</div>;
  }

  const { title, poster_path, overview, release_date, popularity, vote_average } = movie; 

  const moviePoster = poster_path
  ? `https://image.tmdb.org/t/p/w200${poster_path}`
  : "https://placehold.co/200x300"

  return (
    <div>
    
    </div>
  )
}
