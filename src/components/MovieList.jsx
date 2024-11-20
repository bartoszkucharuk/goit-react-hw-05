import { Link, useLocation } from "react-router-dom";
import styles from "../css/MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            
          >
            {/* <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                  : "https://via.placeholder.com/200x300?text=No+Image"
              }
              alt={movie.title}
              
            /> */}
            <div >
              <h3 >{movie.title}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;