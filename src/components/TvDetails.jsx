import React from 'react';
import Preview from './Preview';
import Overview from './Overview';
import Title from './Title';

export default function TvDetails(props) {
    const {
        poster_path,
        name,
        overview,
        videos = {}
    } = props;

    return (
        <article className="col-md-8">
            <header>
                <Preview videos={videos} posterPath={poster_path} />
                <Title text={name} />
            </header>
            <Overview text={overview} />
        </article>
    )
}