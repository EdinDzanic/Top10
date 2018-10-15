import React from 'react';
import Video from './Video';
import Poster from './Poster';

export default function Preview({ videos, posterPath}) {
    const hasTrailer = videos !== undefined && videos.results && videos.results.length > 0;
    return (
        <React.Fragment>
            {hasTrailer ?
                <Video video={videos.results[0]} /> :
                <Poster className="mb-2" posterPath={posterPath} alt="Movie" />
            }
        </React.Fragment>
    );
}