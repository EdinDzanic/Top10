import React from 'react';
import Preview from './Preview';
import Overview from './Overview';
import Title from './Title';
import Genres from './Genres';

export default function TvDetails(props) {
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
    console.log(genres);
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