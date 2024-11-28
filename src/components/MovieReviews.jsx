import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieReviews } from '../API/API';


export default function MovieReviews() {

    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getMovieReviews(movieId).then(setReviews).catch(console.error);
    }, [movieId]);
    
    return (
        <div>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map((review) => (
                        <li key={review.id}>
                            <h4>{review.author}</h4>
                            <p>{review.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>We don't have any reviews for this movie yet.</p>
            )}
        </div>
    );
}
