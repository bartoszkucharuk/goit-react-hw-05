const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img
            src={movie.poster_path
              ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
              : "https://placehold.co/160x260"
            }
            alt={movie.title} />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList;