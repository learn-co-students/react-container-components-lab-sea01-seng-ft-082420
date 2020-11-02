// // Code MovieReviews Here
// import React, {Fragment} from 'react'

// const MovieReviews = (props) => {
    
//      let {headline , byline, display_title, summary_short, publication_date } = props.review 

//     return (

//        <Fragment>
//             <p>{headline}</p>
//             <p>author: {byline}</p>
//             <p>Title: {display_title}</p>
            
//             <p>Summary: {summary_short}</p>
//             <p>published: {publication_date}</p>
//         </Fragment>
//     )
// }

// MovieReviews.defaultProps = {
//     reviews: []
// }

// export default MovieReviews

import React from 'react';

const Review = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (

    <div
      key={headline}
      className="review"
    >
      <header>
        <a
          className="review-link"
          href={link.url}
        >
          {headline}
        </a>
        <br/>
        <span className="author">{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;