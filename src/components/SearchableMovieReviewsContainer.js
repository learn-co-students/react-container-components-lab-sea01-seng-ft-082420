import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
// https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>

export default class SearchableMovieReviewsContainer extends Component {

    state = {
        searchTerm: '',
        reviews: []
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({ searchTerm: e.target.value  })
    }

    startSearchTerm= (e) => {
        e.preventDefault()
        this.setState({reviews: []})
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(res => res.json())
        .then(reviews => {
            this.setState({
                reviews
            })
        })
    }


    render() {
        return (
            <div className= 'searchable-movie-reviews'>
                <form onSubmit={this.startSearchTerm}>
                <label>
                    Search:
                <input type='text' value={this.state.searchTerm} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="submit"/>
                </form>
                <ul>
                {this.state.reviews.results !== undefined ? (this.state.reviews.results.map((review, idx) => <li  key={idx}><MovieReviews  review={review}/></li>)) : <p></p>}
                </ul>
            </div>
        )
    }
}