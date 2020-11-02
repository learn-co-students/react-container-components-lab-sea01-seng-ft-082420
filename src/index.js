import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(
  <div className="app ui container">
    <SearchableMovieReviewsContainer />
    <h1>Some Other Movie Reviews: </h1>
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById('root')
);