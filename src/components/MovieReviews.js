// import React from 'react';


// const MovieReviews = ({review}) => {
//     return (
//         <div
//             className="review"
//         >
//             <header>
//                 <a
//                     className="review-link"
//                     href={review.link.url}
//                 >
//                     {review.headline}
//                 </a>
//                 <br/>
//                 <span className="author">{review.byline}</span>
//             </header>
//             <blockquote>{review.summary_short}</blockquote>
//         </div>
//     )
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

// byline: "Natalia Winkelman"
// critics_pick: 0
// date_updated: "2020-11-13 18:42:30"
// display_title: "Come Away"
// headline: "‘Come Away’ Review: Escaping Grief Through Fantasy"
// link:
// suggested_link_text: "Read the New York Times Review of Come Away"
// type: "article"
// url: "http://www.nytimes.com/2020/11/13/movies/come-away-review.html"
// __proto__: Object
// mpaa_rating: "PG"
// multimedia:
// height: 140
// src: "https://static01.nyt.com/images/2020/11/14/arts/comeaway1/merlin_179664417_ea749210-f68b-4f72-8f74-c696266927e7-mediumThreeByTwo210.jpg"
// type: "mediumThreeByTwo210"
// width: 210
// __proto__: Object
// opening_date: "2020-11-13"
// publication_date: "2020-11-13"
// summary_short: "David Oyelowo and Angelina Jolie play grieving parents in a dreary melodrama that imagines Peter Pan and Alice (of Wonderland) as siblings."
// __proto__: Object
