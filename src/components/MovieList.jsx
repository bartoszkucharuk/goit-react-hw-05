import { React } from 'react'
import {Link, useLocation} from "react-router-dom"


export default function MovieList({ movies }) {
    const location = useLocation();
    
  return (
    <div>
        {movies.map((movie) => (
            <div key={movie.id}>
                <Link
                    to={`/movies/${movie.id}`}
                    state={{from: location}}>
                <img
                    src={movie.poster_path
                        ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                        : "https://placehold.co/200x300?text=poster+not+found"
                    }
                    alt={movie.title}
                />
                    <h3>{movie.title}</h3>
                </Link>
            </div>
    ))}
    </div>
  )
}
