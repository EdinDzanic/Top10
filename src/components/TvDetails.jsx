import React from 'react';
import PropTypes from 'prop-types';

import Preview from './Preview';
import Overview from './Overview';
import Title from './Title';
import Genres from './Genres';

function TvDetails(props) {
    const {
        poster_path,
        name,
        overview,
        videos = {},
        number_of_seasons,
        vote_average,
        number_of_episodes,
        genres
    } = props;

    return (
        <article className="col-md-8">
            <header>
                <Preview videos={videos} posterPath={poster_path} />
                <Title text={name}>
                    <div className="sub-text">
                        Seasons: {number_of_seasons}<span className="mr-1 ml-1">|</span>
                        Episodes: {number_of_episodes}<span className="mr-1 ml-1">|</span>
                        Rating: {vote_average}/10<span className="mr-1 ml-1">|</span>
                        <Genres genres={genres} />
                    </div>
                </Title>
            </header>
            <Overview text={overview} />
        </article>
    )
}

TvDetails.propTypes = {
    poster_path: PropTypes.string,
    name: PropTypes.string,
    overview: PropTypes.string,
    videos: PropTypes.object,
    number_of_seasons: PropTypes.number,
    number_of_episodes: PropTypes.number,
    vote_average: PropTypes.number,
    genres: PropTypes.array
}

export default TvDetails;