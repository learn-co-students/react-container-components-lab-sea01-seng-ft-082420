import React from 'react'

const MovieReviews = props => 

<div className='review ui raised card'>
    <div className='ui center aligned'>
        <h1 className='ui header'>{props.movie.headline}</h1>
        <p>{props.movie.summary_short}</p>
        {props.movie.multimedia ? <img className='ui centered image' src={props.movie.multimedia.src} /> : <img src="https://react.semantic-ui.com/images/wireframe/image.png" class="ui small centered image"/>}
        {/* <img className='ui centered image' src={props.movie.multimedia.src} /> */}
    </div>
    <div className='ui center aligned'>
        <a href={props.movie.link.url}><span>{props.movie.link.suggested_link_text}</span></a>
        <h5>Critics Pick: {props.movie.critics_pick}</h5>
    </div>
</div>

export default MovieReviews