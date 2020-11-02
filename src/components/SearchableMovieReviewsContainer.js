import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

            const BASE_URL =
            'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
            `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
// https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>

// export default class SearchableMovieReviewsContainer extends Component {

//     state = {
//         searchTerm: '',
//         reviews: []
//     }

//     handleChange = (e) => {
//         e.preventDefault()
//         this.setState({ searchTerm: e.target.value  })
//     }

//     startSearchTerm= (e) => {
//         e.preventDefault()
//         this.setState({reviews: []})
//         fetch(URL + `&query=${this.state.searchTerm}`)
//         .then(res => res.json())
//         .then(reviews => {
//             this.setState({
//                 reviews
//             })
//         })
//     }


//     render() {
//         return (
//             <div className= 'searchable-movie-reviews'>
//                 <form onSubmit={this.startSearchTerm}>
//                 <label>
//                     Search:
//                 <input type='text' value={this.state.searchTerm} onChange={this.handleChange}/>
//                 </label>
//                 <input type="submit" value="submit"/>
//                 </form>
//                 <ul>
//                 {this.state.reviews.results !== undefined ? (this.state.reviews.results.map((review, idx) => <li  key={idx}><MovieReviews  review={review}/></li>)) : <p></p>}
//                 </ul>
//             </div>
//         )
//     }
// }

class SearchableMovieReviewsContainer extends Component {
    state = {
      searchTerm: '',
      reviews: []
    };
  
    handleSearchInputChange = event =>
      this.setState({ searchTerm: event.target.value });
  
    handleSubmit = event => {
      event.preventDefault();
  
      fetch(BASE_URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(res => this.setState({ reviews: res.results }));
    };
  
    render() {
      return (
        <div className="searchable-movie-reviews">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="search-input">Search Movie Reviews</label>
            <input
              id="search-input"
              type="text"
              style={{ width: 300 }}
              onChange={this.handleSearchInputChange}
            />
            <button type="submit">Submit</button>
          </form>
          {typeof this.state.reviews === 'object' &&
            this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
          <MovieReviews reviews={this.state.reviews} />
        </div>
      );
    }
  }
  
  export default SearchableMovieReviewsContainer;