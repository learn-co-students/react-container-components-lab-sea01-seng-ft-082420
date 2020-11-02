import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
    constructor() {
    super()
    this.state = {
        reviews: []
        }
    }
    getbookdata(url) {
        fetch(url)
        .then(res => res.json())
        .then(reviews =>
            this.setState({reviews: reviews})
            )
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.reviews !== nextState.reviews
    // }
    co

    componentDidMount() {this.getbookdata(URL)}

    componentDidUpdate() {
        this.getbookdata(URL)
    }

    render() {
        return (
            <ul className= 'latest-movie-reviews'>
                {this.state.reviews.results !== undefined ? this.state.reviews.results.map((review, idx) => <MovieReviews key = {idx} review={review}/>): <p></p> }
            </ul>
        )
    }
}