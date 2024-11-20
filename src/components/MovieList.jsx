import { useLocation, Link } from "react-router-dom"; 
const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link
            to={`/movies/$:{movie.id}`}
            state={{ from: location }}>
            <img
            src={movie.poster_path
              ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
              : "https://placehold.co/160x260"
            }
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;