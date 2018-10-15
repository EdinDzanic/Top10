import React from 'react';
import Overview from './Overview';
import Title from './Title';
import Preview from './Preview';

export default function MovieDetails(props) {
    const {
        poster_path,
        title,
        overview,
        videos = {},
        tagline = ""
    } = props;

    return (
        <article className="col-md-8">
            <header>
                <Preview videos={videos} posterPath={poster_path} />
                <Title text={title}>
                    <small>
                        <p className="text-muted">{tagline}</p>
                    </small>
                </Title>
            </header>
            <Overview text={overview} />
        </article>
    )
}