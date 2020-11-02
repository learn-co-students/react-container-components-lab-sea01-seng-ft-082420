import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ''
    }

    handleChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${URL}&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(movies => {
            const newReviews = movies.results
            this.setState({ reviews: newReviews, searchTerm: '' })
        })
    }

    render(){
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='searchTerm' value={this.state.searchTerm} onChange={this.handleChange}/>
                    <button type='submit'>Search Reviews</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;