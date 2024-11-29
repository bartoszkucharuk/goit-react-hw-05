import {useState, useEffect} from 'react'
import { fetchTrendingMovies } from "../API/API"
import MovieList from "../components/MovieList"
import css from "../css/HomePage.module.css"

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendingMovies()
            .then(setMovies)
            .catch(console.error);
    }, []);

    return (
        <div className={css.homePage}>
            <h1 className={css.title}>Trending today</h1>
            <MovieList movies={movies} />
        </div>
    );
}
