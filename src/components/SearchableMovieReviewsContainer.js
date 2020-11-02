import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    state = {
        movies: [],
        text: ''
    }

    handleChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        // this.props.handleSubmit(this.state.text)
        fetch(URL + `&query=${this.state.text}`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                movies: data.results
            })
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Movie Review Search</h1>
                    <form onSubmit={e => this.onSubmit(e)} className='ui form'>
                        <input type='text' value={this.state.text} onChange={(e) => this.handleChange(e)} />
                        <button type='submit'/>
                    </form>
                </div>
                <div className='review-list latest-movie-reviews ui centered four cards'>
                    {this.state.movies.map( movie => <MovieReviews movie={movie} />)}  
                </div>
            </div>
        )
    }
}