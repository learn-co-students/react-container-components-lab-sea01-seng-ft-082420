// Code MovieReviews Here
  
import React from 'react'

const MovieReviews = ({ reviews }) => {
    return (
        <ol className='review-list'>
            {reviews.map(review => {
                return(
                    <li className='review'>
                        <h3><a href={review['link']['url']}>{review['headline']}</a></h3>
                        {review['critics_pick'] ? <strong>Critics Pick!<br /></strong>: null}
                        <i>{review['summary_short']}</i>
                    </li>
                )
            })}
        </ol>
    );
};

export default MovieReviews