import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

// export default class LatestMovieReviewsContainer extends Component {
//     constructor() {
//     super()
//     this.state = {
//         reviews: []
//         }
//     }
//     getbookdata(url) {
//         fetch(url)
//         .then(res => res.json())
//         .then(reviews =>
//             this.setState({reviews: reviews})
//             )
//     }

//     // shouldComponentUpdate(nextProps, nextState) {
//     //     return this.state.reviews !== nextState.reviews
//     // }
//     co

//     componentDidMount() {this.getbookdata(URL)}

//     // componentDidUpdate() {
//     //     this.getbookdata(URL)
//     // }

//     render() {
//         return (
//             <div className= 'latest-movie-reviews'>
//             <ul className= 'review-list'>
//                 {this.state.reviews.results !== undefined ? this.state.reviews.results.map((review, idx) => <MovieReviews  review={review}/>): <p></p> }
//             </ul>
//             </div>
//         )
//     }
// }

class LatestMovieReviewsContainer extends Component {
    constructor() {
      super();
  
      this.state = {
        reviews: []
      };
    }
  
    componentDidMount() {
      fetch(URL)
        .then(res => res.json())
        .then(response => this.setState({ reviews: response.results }));
    }
  
    render() {
      return (
        <div className="latest-movie-reviews">
          <h2>The Latest Reviews:</h2>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      );
    }
  }
  
  
  export default LatestMovieReviewsContainer;