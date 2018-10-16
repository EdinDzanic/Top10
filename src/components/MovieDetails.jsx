import React from 'react';
import PropTypes from 'prop-types';

import Overview from './Overview';
import Title from './Title';
import Preview from './Preview';
import Genres from './Genres';

function MovieDetails(props) {
    const {
        poster_path,
        title,
        overview,
        videos = {},
        tagline = "",
        vote_average,
        genres
    } = props;

    return (
        <article className="col-md-8">
            <header>
                <Preview videos={videos} posterPath={poster_path} />
                <Title text={title}>
                    <p className="sub-text text-muted">{tagline}</p>
                    <div className="sub-text">
                        Rating: {vote_average}/10<span className="mr-1 ml-1">|</span>
                        <Genres genres={genres} />
                    </div>
                </Title>
            </header>
            <Overview text={overview} />
        </article>
    )
}

MovieDetails.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    videos: PropTypes.object,
    tagline: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.array
}

export default MovieDetails;