import React from 'react'

export default function MovieList({ movies }) {
    
  return (
    <div>
          {movies.map((movie) => (
              <div key={movie.id}>
                <h3>{movie.title}</h3>
            </div>
      ))}
    </div>
  )
}
