import { useEffect, useState } from 'react'
import MovieList from '../components/MovieList';
import { searchParams} from "react-router-dom"

export default function MoviesPage() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (query) {
            searchMovies(searchMoviesInput)
                .then(setMovies)
                .catch(console.error);
        }
    }, [query]);

    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const query = form.elements.query.value;
        setSearchParams({ query });
    }

    return (
        <div>
            <form>
                <input
                    name="searchMoviesInput"
                    type="text"
                    placeholder="Search movies..."
                />
                <button type="submit" onSubmit={handleSearch}>Search</button>
            </form>
            <MovieList movies={movies} />
        </div>
    );
}
