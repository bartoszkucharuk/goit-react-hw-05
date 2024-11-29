import { React } from 'react'
import {Link, useLocation} from "react-router-dom"
import css from "../css/MovieList.module.css"

export default function MovieList({ movies }) {
    const location = useLocation();
    
  return (
    <ul className={css.movieList}>
        {movies.map((movie) => (
            <li key={movie.id} className={css.movieItem}>
                <div className={css.movieCard}>
                <Link
                    to={`/movies/${movie.id}`}
                    state={{ from: location }}>
                    <img
                        className={css.moviePoster}
                        src={movie.poster_path
                        ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                        : "https://placehold.co/200x300?text=poster+not+found"
                    }
                    alt={movie.title}
                />
                    <h2 className={css.movieHeader}>{movie.title}</h2>
                    </Link>
                    </div>
            </li>
    ))}
    </ul>
  )
}
