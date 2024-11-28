import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieCast } from '../API/API';

export default function MovieCast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        getMovieCast(movieId).then(setCast).catch(console.error);
    }, [movieId]);

    if (!cast.length) {
        <div>Sorry, we don't have any information about cast yet. </div>
    };

    return (
        <div>
            <ul>
                {cast.map((castActor) => (
                    <li key={castActor.id}>
                        <img
                            src={castActor.profile_path
                                ? `https://image.tmdb.org/t/p/w45${castActor.profile_path}`
                            : "https://placehold.co/45x60"}
                            alt={castActor.name}
                        />
                        <p>{castActor.name}: {castActor.character}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
