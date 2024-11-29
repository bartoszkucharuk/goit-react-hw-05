import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieReviews } from '../API/API';
import css from "../css/MovieReviews.module.css"


export default function MovieReviews() {

    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getMovieReviews(movieId).then(setReviews).catch(console.error);
    }, [movieId]);
    
    return (
        <div className={css.reviews}>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map((review) => (
                        <li key={review.id}>
                            <h4 className={css.author}>{review.author}</h4>
                            <p className={css.previewContent}>{review.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>We don't have any reviews for this movie yet.</p>
            )}
        </div>
    );
}
