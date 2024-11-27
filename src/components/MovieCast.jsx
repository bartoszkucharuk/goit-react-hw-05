import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../API/API";
import styles from "../css/MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(setCast).catch(console.error);
  }, [movieId]);

  if (!cast.length) {
    return <p>No cast information available.</p>;
  }

  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.id}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : "https://via.placeholder.com/200x300?text=No+Image"
            }
            alt={actor.name}
          />
          <p>{actor.name}</p>
          <p>as {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;