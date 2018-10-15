import React from 'react';
import Video from './Video';
import Poster from './Poster';

export default function Preview({ videos, posterPath}) {
    let hasTrailer = videos !== undefined && videos.results && videos.results.length > 0;
    let trailer;
    if (hasTrailer)
        trailer = videos.results.find(x => x.type === 'Trailer');
    
    hasTrailer = trailer !== undefined;
    return (
        <React.Fragment>
            {hasTrailer ?
                <Video video={trailer} /> :
                <Poster className="mb-2" posterPath={posterPath} alt="Movie" />
            }
        </React.Fragment>
    );
}